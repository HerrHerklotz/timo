import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public mContent: {};
  private mDatabase: IDBDatabase;


  ngOnInit() {
    if (!window.indexedDB) {
      window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }
    
    const request = window.indexedDB.open("TimoDatabase", 1);

    /*request.onerror = (pEvent: Event) => {
      alert(`IndexedDB Error: ${request.errorCode}`);
    };*/

    request.onsuccess = (pEvent: Event) => {
      this.mDatabase = (<IDBOpenDBRequest>pEvent.target).result; //pEvent.target.result;
      this.readDatabase();
    };
    
    // This event is only implemented in recent browsers   
    request.onupgradeneeded = (pEvent: Event) => { 
      // Save the IDBDatabase interface 
      const lDatabase: IDBDatabase = (<IDBOpenDBRequest>pEvent.target).result;

      if (lDatabase.objectStoreNames.contains("days")) {
        lDatabase.deleteObjectStore("days")
      }

      // Create an objectStore for this database
      lDatabase.createObjectStore("days");
    };
  }

  public readDatabase() {
    const lTransaction = this.mDatabase.transaction(['days'], 'readonly');
  
    const keyRange = IDBKeyRange.lowerBound(0);
    const lCursorRequest = lTransaction.objectStore('days').openCursor(keyRange);
  
    this.mContent = {};
  
    lTransaction.oncomplete = (pEvent: Event) => {
      console.info("read completed");
    };
  
    lCursorRequest.onsuccess = (pEvent: Event) => {
      const lResult = (<IDBRequest>pEvent.target).result;
  
      if (!!lResult == false) {
        return;
      }

      this.mContent[lResult.key] = lResult.value;
  
      lResult.continue();
    };
  }

  public addDatabaseEntry() {
    function pad(pNumber: number): string {
      return ((pNumber < 10) ? `0${pNumber}` : `${pNumber}`);
    }

    const transaction = this.mDatabase.transaction(['days'], 'readwrite');

    // Get the datastore.
    const objStore = transaction.objectStore('days');

    // Create a timestamp.
    const timestamp = new Date();
    const day = `${pad(timestamp.getDate())}.${pad(timestamp.getMonth()+1)}`;
    const time = `${pad(timestamp.getHours())}:${pad(timestamp.getMinutes())}`;

    if (this.mContent[day]) {
      this.mContent[day].unshift(time);
    } else {
      this.mContent[day] = [time];
    }

    // Create the datastore request.
    const request = objStore.put(this.mContent[day], day);

    // Handle a successful datastore put.
    request.onsuccess = (e) => {
      console.info("write completed");
      this.readDatabase();
    };

    request.onerror = (pEvent: Event) => {
      console.error("Error during write", pEvent);
    }
  }

  public deleteDatabaseEntry(pKey) {
    const transaction = this.mDatabase.transaction(['days'], 'readwrite');
    const objStore = transaction.objectStore('days');
  
    const request = objStore.delete(pKey);
  
    request.onsuccess = (pEvent: Event) => {
      console.info("delete completed");
      this.readDatabase();
    }
  
    request.onerror = (pEvent: Event) => {
      console.error("Error during delete", pEvent);
    }
  }
}
