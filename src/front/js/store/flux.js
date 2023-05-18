const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      token: null,
      user: null,
      // demo: [
      // 	{
      // 		title: "FIRST",
      // 		background: "white",
      // 		initial: "white"
      // 	},
      // 	{
      // 		title: "SECOND",
      // 		background: "white",
      // 		initial: "white"
      // 	}
      // ]
    },
    actions: {
      saveToken: () => {
        const token = sessionStorage.getItem("token");
        const user = sessionStorage.getItem("user");

        if (token && token !== "" && token !== undefined) {
          setStore({ token: token });
          console.log("Saving token...", token);
        }
        if (user && user !== "" && user !== undefined) {
          setStore({ user: user });
          console.log("Saving user...", user);
          setStore({ message: "Hi " + user + " Welcome to your website" });
        }
      },
      removeToken: () => {
        const token = sessionStorage.getItem("token");
        if (token && token !== "" && token !== undefined) {
          setStore({ token: null });
          setStore({ user: null });
          const token = sessionStorage.removeItem("token");
          console.log("Deleting token...", token);
          const user = sessionStorage.removeItem("user");
          setStore({ message: "You just logged out =/" });
        }
      },
      createToken: (email, password) => {
        const store = getStore();
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        fetch(process.env.BACKEND_URL + "/api/login", opts) //"https://3001-danielacmg-authpy2-k19odipup3g.ws-us97.gitpod.io/api/login"
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                "This is an HTTP error: The status is ${response.status}"
              );
            }
            return response.json();
          })
          .then((data) => {
            setStore({ token: data.access_token });
            setStore({ error: null });
            console.log("data =", data);
            sessionStorage.setItem("token", data.access_token);
            sessionStorage.setItem("user", data.user_id);
            setStore({ user: data.user_id });
          })
          .catch((err) => {
            setStore({ error: err.message });
            setStore({ token: null });
          })
          .finally(() => {
            setStore({ loading: false });
            setStore({ message: "You just logged in =)" });
          });
      },
      // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      // 	getActions().changeColor(0, "green");
      // },

      getMessage: () => {
        const token = sessionStorage.getItem("token");
        const user = sessionStorage.getItem("user");

        if (token && token !== "" && token !== undefined) {
          setStore({
            message: "Hi " + user + " Welcome to your website",
          });
        } else {
          setStore({
            message: "Please sign in to access website content.",
          });
        }
      },
      createUser: async (email, password) => {
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/createUser",
            opts
          );
          if (response.status >= 400) {
            alert("There has been an error");
            return false;
          }
          const data = await response.json();
          if (data.status == "true") {
          }
          return true;
        } catch (error) {
          console.error(error);
        }
      },
      showRestricted: async () => {
        const token = getStore().token;
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/restricted");
          const data = await resp.json();
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error showing content", error);
        }
      },

      // getMessage: async () => {
      //   try {
      //     // fetching data from the backend
      //     const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
      //     const data = await resp.json();
      //     setStore({ message: data.message });
      //     // don't forget to return something, that is how the async resolves
      //     return data;
      //   } catch (error) {
      //     console.log("Error loading message from backend", error);
      //   }
      // },
      // changeColor: (index, color) => {
      // 	//get the store
      // 	const store = getStore();

      // 	//we have to loop the entire demo array to look for the respective index
      // 	//and change its color
      // 	const demo = store.demo.map((elm, i) => {
      // 		if (i === index) elm.background = color;
      // 		return elm;
      // 	});

      // 	//reset the global store
      // 	setStore({ demo: demo });
      // }
    },
  };
};

export default getState;
