export let StatusUser = false;
export let User_id;
let buttonReg = document.querySelector(".account__text")
let name;
let swap = document.querySelector(".account__text span")
let LogOut = document.querySelector(".account__option p span")

export function Accounts() {
  function checkUserStatus() {
    if (StatusUser == true) {
      swap.innerHTML = name
    }
  }

  setInterval(checkUserStatus, 5000);


  let htmlCode =
    `
              <div class="registration">
              <div class="blur"></div>
              <div class="registration__body">
                  <div class="registration__title">
                      <span>Sing in</span>
                      <div class="registration__close"></div>
                  </div>
                  <form action="./server/GetSignIn.php" class="registration__form" method="POST">
                      <div class="registration__name">
                          <label for="name">Name</label>
                          <input type="text" name="name" id="name" placeholder="name" required>
                      </div>
                      <div class="registration__email">
                          <label for="email">Email</label>
                          <input type="email" name="email" id="email" placeholder="email" required>
                      </div>
                      <div class="registration__password">
                          <label for="password">Password</label>
                          <input type="password" name="password" id="password" placeholder="password" required>
                      </div>
                      <button class="registration__button">Sign in</button>
                  </form>
                  <div class="registration__remote">
                      Have you account?<span>Log in</span>
                  </div>
              </div>
          </div>
      `

  const range = document.createRange();
  const fragment = range.createContextualFragment(htmlCode);
  document.body.appendChild(fragment);

  let remote = document.querySelector(".registration__remote span");
  remote.addEventListener("click", toggleRegistrationForm);
  let registrationForm = document.querySelector(".registration__form");
  registrationForm.addEventListener("submit", handleRegistrationFormSubmit);
  let closesReg = document.querySelector(".registration__close")
  let body = document.querySelector(".registration");
  closesReg.addEventListener("click", () => {
    body.remove()
  })
  LogOut.addEventListener("click", () => {
    location.reload();
  })


  function GetUsers() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let buutonGetUsers = document.querySelector('.registration__button')
    let option = document.querySelector(".account__option")
    if (buutonGetUsers.textContent == "Log in") {
      fetch("./server/GetLogIn.php")
        .then(res => res.json())
        .then(data => {
          data.forEach(user => {
            if (user[1] == password.value && user[2] == email.value) {
              StatusUser = true
              option.classList.add("active")
              name = user[0];
              User_id = parseInt(user[3])
            } else {
              console.log("error")
            }
          })
        })
        .catch(error => {
          console.error("Ошибка при получении данных:", error);
        });
    } else {
      return
    }
  }

  function handleRegistrationFormSubmit(event) {
    event.preventDefault();

    let body = document.querySelector(".registration");
    let inputName = document.getElementById("name")
    let option = document.querySelector(".account__option")
    let form = event.target;
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = xhr.responseText;

        if (response === "success") {
          option.classList.add("active")
          name = inputName.value;
          StatusUser = true;
        } else {
          StatusUser = false;
        }
      }
    };
    xhr.send(formData);
    body.remove();
  }


  function toggleRegistrationForm() {
    let remote = document.querySelector(".registration__remote span");
    let body = document.querySelector(".registration");
    let htmlCode;

    if (remote.textContent === "Log in") {
      htmlCode = `
          <div class="registration">
            <div class="blur"></div>
            <div class="registration__body">
              <div class="registration__title">
                <span>Log in</span>
                <div class="registration__close"></div>
              </div>
              <form action="./server/GetLogIn.php" class="registration__form" method="POST">
                <div class="registration__email">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="email" required>
                </div>
                <div class="registration__password">
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" placeholder="password" required>
                </div>
                <button class="registration__button">Log in</button>
              </form>
              <div class="registration__remote">
                Don't have an account?<span>Sign in</span>
              </div>
            </div>
          </div>
        `;
    } else {
      htmlCode = `
          <div class="registration">
            <div class="blur"></div>
            <div class="registration__body">
              <div class="registration__title">
                <span>Sign in</span>
                <div class="registration__close"></div>
              </div>
              <form action="./server/GetSignIn.php" class="registration__form" method="POST">
                <div class="registration__name">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" placeholder="name" required>
                </div>
                <div class="registration__email">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="email" required>
                </div>
                <div class="registration__password">
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" placeholder="password" required>
                </div>
                <button class="registration__button">Sign in</button>
              </form>
              <div class="registration__remote">
                Have an account?<span>Log in</span>
              </div>
            </div>
          </div>
        `;
    }
    body.remove();
    const range = document.createRange();
    const fragment = range.createContextualFragment(htmlCode);
    document.body.appendChild(fragment);


    let newRemote = document.querySelector(".registration__remote span");
    newRemote.addEventListener("click", toggleRegistrationForm);
    let registrationForm = document.querySelector(".registration__form");
    registrationForm.addEventListener("submit", handleRegistrationFormSubmit);
    let buutonGetUsers = document.querySelector('.registration__button')
    buutonGetUsers.addEventListener("click", GetUsers)
    let closesReg = document.querySelector(".registration__close")
    closesReg.addEventListener("click", () => {
      let body = document.querySelector(".registration");
      body.remove()
    })
    LogOut.addEventListener("click", () => {
      location.reload();
    })
  }
}

function checkUserStatus() {
  if (StatusUser == true) {
    swap.innerHTML = name
  }
}

setInterval(checkUserStatus, 5000);



buttonReg.addEventListener("click", () => {
  let buttonReg = document.querySelector(".account__text span")
  if (buttonReg.textContent == "Sign in") {
    let htmlCode =
      `
            <div class="registration">
            <div class="blur"></div>
            <div class="registration__body">
                <div class="registration__title">
                    <span>Sing in</span>
                    <div class="registration__close"></div>
                </div>
                <form action="./server/GetSignIn.php" class="registration__form" method="POST">
                    <div class="registration__name">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="name" required>
                    </div>
                    <div class="registration__email">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="email" required>
                    </div>
                    <div class="registration__password">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="password" required>
                    </div>
                    <button class="registration__button">Sign in</button>
                </form>
                <div class="registration__remote">
                    Have you account?<span>Log in</span>
                </div>
            </div>
        </div>
    `

    const range = document.createRange();
    const fragment = range.createContextualFragment(htmlCode);
    document.body.appendChild(fragment);

    let remote = document.querySelector(".registration__remote span");
    remote.addEventListener("click", toggleRegistrationForm);
    let registrationForm = document.querySelector(".registration__form");
    registrationForm.addEventListener("submit", handleRegistrationFormSubmit);
    let closesReg = document.querySelector(".registration__close")
    let body = document.querySelector(".registration");
    closesReg.addEventListener("click", () => {
      body.remove()
    })
    LogOut.addEventListener("click", () => {
      location.reload();
    })
  }
})


function GetUsers() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let buutonGetUsers = document.querySelector('.registration__button')
  let option = document.querySelector(".account__option")
  if (buutonGetUsers.textContent == "Log in") {
    fetch("./server/GetLogIn.php")
      .then(res => res.json())
      .then(data => {
        data.forEach(user => {
          if (user.password == password.value && user.email == email.value) {
            StatusUser = true
            option.classList.add("active")
            name = user.name;
            User_id = parseInt(user.id)
          } else {
            console.log("error")
          }
        })
      })
      .catch(error => {
        console.error("Ошибка при получении данных:", error);
      });
  } else {
    return
  }
}

function handleRegistrationFormSubmit(event) {
  event.preventDefault();

  let body = document.querySelector(".registration");
  let inputName = document.getElementById("name")
  let option = document.querySelector(".account__option")
  let form = event.target;
  let formData = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", form.action, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = xhr.responseText;

      if (response === "success") {
        option.classList.add("active")
        name = inputName.value;
        StatusUser = true;
      } else {
        StatusUser = false;
      }
    }
  };
  xhr.send(formData);
  body.remove();
}


function toggleRegistrationForm() {
  let remote = document.querySelector(".registration__remote span");
  let body = document.querySelector(".registration");
  let htmlCode;

  if (remote.textContent === "Log in") {
    htmlCode = `
        <div class="registration">
          <div class="blur"></div>
          <div class="registration__body">
            <div class="registration__title">
              <span>Log in</span>
              <div class="registration__close"></div>
            </div>
            <form action="./server/GetLogIn.php" class="registration__form" method="POST">
              <div class="registration__email">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="email" required>
              </div>
              <div class="registration__password">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="password" required>
              </div>
              <button class="registration__button">Log in</button>
            </form>
            <div class="registration__remote">
              Don't have an account?<span>Sign in</span>
            </div>
          </div>
        </div>
      `;
  } else {
    htmlCode = `
        <div class="registration">
          <div class="blur"></div>
          <div class="registration__body">
            <div class="registration__title">
              <span>Sign in</span>
              <div class="registration__close"></div>
            </div>
            <form action="./server/GetSignIn.php" class="registration__form" method="POST">
              <div class="registration__name">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="name" required>
              </div>
              <div class="registration__email">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="email" required>
              </div>
              <div class="registration__password">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="password" required>
              </div>
              <button class="registration__button">Sign in</button>
            </form>
            <div class="registration__remote">
              Have an account?<span>Log in</span>
            </div>
          </div>
        </div>
      `;
  }
  body.remove();
  const range = document.createRange();
  const fragment = range.createContextualFragment(htmlCode);
  document.body.appendChild(fragment);


  let newRemote = document.querySelector(".registration__remote span");
  newRemote.addEventListener("click", toggleRegistrationForm);
  let registrationForm = document.querySelector(".registration__form");
  registrationForm.addEventListener("submit", handleRegistrationFormSubmit);
  let buutonGetUsers = document.querySelector('.registration__button')
  buutonGetUsers.addEventListener("click", GetUsers)
  let closesReg = document.querySelector(".registration__close")
  closesReg.addEventListener("click", () => {
    let body = document.querySelector(".registration");
    body.remove()
  })
  LogOut.addEventListener("click", () => {
    location.reload();
  })
}