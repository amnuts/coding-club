import {DBSchema, openDB} from 'idb/with-async-ittr';
import {EventMessageInterface, EventStoreInterface, EventStoreSchema} from "./Interfaces";
import {EventMessage} from "./EventMessage";

export class EventStore implements EventStoreInterface
{
    private db: any;
    public tableName: string = 'events';

    public constructor()
    {
        this.createObjectStore();
    }

    private async createObjectStore() {
        this.db = await openDB<EventStoreSchema>('eventsource', 1, {
            upgrade(db) {
                db.createObjectStore('events', { autoIncrement: true, keyPath: 'id' });
            },
        });
    }

    public async getAll() {
        const tx = this.db.transaction(this.tableName, 'readonly');
        const store = tx.objectStore(this.tableName);
        const result = await store.getAll();
        console.log('Get: ', JSON.stringify(result));
        return result;
    }

    public async put(value: object) {
        const tx = this.db.transaction(this.tableName, 'readwrite');
        const store = tx.objectStore(this.tableName);
        const result = await store.put(value);
        console.log('Put: ', JSON.stringify(result));
        return result;
    }
}