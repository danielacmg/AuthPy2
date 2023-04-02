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
        if (token && token !== "" && token !== undefined) {
          setStore({ token: token });
          console.log("Saving token...", token);
        }
      },
      removeToken: () => {
        const token = sessionStorage.getItem("token");
        if (token && token !== "" && token !== undefined) {
          setStore({ token: null });
          const token = sessionStorage.removeItem("token");
          console.log("Deleting token...", token);
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
        fetch(
          "https://3001-4geeksacade-reactflaskh-gpsy2cwph0t.ws-us93.gitpod.io/api/login",
          opts
        )
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
            // console.log("data =", data);
            sessionStorage.setItem("token", data.access_token);
            sessionStorage.setItem("user", get_jwt_identity());
            setStore({ user: get_jwt_identity() });
            setStore({ message: "You just logged in =)" });
          })
          .catch((err) => {
            setStore({ error: err.message });
            setStore({ token: null });
          })
          .finally(() => {
            setStore({ loading: false });
          });
      },
      // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      // 	getActions().changeColor(0, "green");
      // },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
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
