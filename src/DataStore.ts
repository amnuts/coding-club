import './Interfaces';
import { openDB, DBSchema } from 'idb/with-async-ittr';

interface EventStoreSchema extends DBSchema {
    events: {
        value: EventMessageInterface;
        key: string;
    };
}

class DataStore {
    private readonly database: string;
    private db: any;

    constructor(database: string) {
        this.database = database;
    }

    public async createObjectStore() {
        try {
            this.db = await openDB<EventStoreSchema>(this.database, 1, {
                upgrade(db) {
                    db.createObjectStore('events', { autoIncrement: true, keyPath: 'id' });
                },
            });
        } catch (error) {
            return false;
        }
    }

    public async get(tableName: string, id: number) {
        const tx = this.db.transaction(tableName, 'readonly');
        const store = tx.objectStore(tableName);
        const result = await store.get(id);
        console.log('Get Data ', JSON.stringify(result));
        return result;
    }

    public async getAll(tableName: string) {
        const tx = this.db.transaction(tableName, 'readonly');
        const store = tx.objectStore(tableName);
        const result = await store.getAll();
        console.log('Get All Data', JSON.stringify(result));
        return result;
    }

    public async put(tableName: string, value: object) {
        const tx = this.db.transaction(tableName, 'readwrite');
        const store = tx.objectStore(tableName);
        const result = await store.put(value);
        console.log('Put Data ', JSON.stringify(result));
        return result;
    }

    public async putAll(tableName: string, values: object[]) {
        const tx = this.db.transaction(tableName, 'readwrite');
        const store = tx.objectStore(tableName);
        for (const value of values) {
            const result = await store.put(value);
            console.log('Put Bulk Data ', JSON.stringify(result));
        }
        return this.getAll(tableName);
    }

    public async delete(tableName: string, id: number) {
        const tx = this.db.transaction(tableName, 'readwrite');
        const store = tx.objectStore(tableName);
        const result = await store.get(id);
        if (!result) {
            console.log('Id not found', id);
            return result;
        }
        await store.delete(id);
        console.log('Deleted Data', id);
        return id;
    }
}

export default DataStore;
