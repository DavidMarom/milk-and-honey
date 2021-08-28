import { fdb } from "../firebase"
import "firebase/auth"
import "firebase/database"

function writeToDb(id, obj) {
	return fdb.ref(id).set(obj);
}

function loadDb() {
	var queryRef = fdb.ref().orderByKey();
	queryRef.on('value', snapshot => { return(snapshot.val()) })
}

export const fdbService = {
	writeToDb,
	loadDb
}