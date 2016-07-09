const firebase = window.firebase

// TODO: Replace with your project's customized code snippet
const config = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com",
};

firebase.initializeApp(config);

function setupDataListener(user, database, callback, data) {
  console.log('setting up data listener')
  data.dataRef = database.ref(`data/${user.uid}`)
  data.dataRef.on('value', (snapshot) => {
    console.log(snapshot.val())
    callback(snapshot.val())
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.code);
  })
}

function Data(callback) {
  const database = firebase.database()

  const updateData = (user) => {
    if (user) {
      this.user = user
      console.log(this)
      setupDataListener(user, database, callback, this)
    } else {
      this.user = null
      this.dataRef.off()
      callback({})
    }
  }

  const handleError = (error) => console.log(error)

  firebase.auth().onAuthStateChanged(updateData.bind(this), handleError)

  return this
}

export default Data
