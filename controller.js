

function verifySession(){
    let user = localStorage.getItem('USER') || "";
    if(user == ""){
      alert("Session Expired/ Not logged In.. Please login again");
      window.location.href = "./index.html";
    }
  }

class UserSession{
    checkLogin(uName, pswd){
        // let uName = document.getElementById('uName').value;
        // let pswd = document.getElementById('pswd').value;

        if(uName == 'prajeethan' && pswd == 'playboy'){
            localStorage.setItem('USER', uName);
            window.location.href = './rrapp_aboutus.html';
        }else{
            localStorage.removeItem('USER');
            alert('Invalid Username/Password');
        }
    }

    verifySession(){
        let user = localStorage.getItem('USER') || "";
        if(user == ""){
          alert("Session Expired/ Not logged In.. Please login again");
          window.location.href = "./index.html";
        }
      }
}