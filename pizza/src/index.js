import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

<body>
<img	src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"></img>
</body>
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
