import App from "./app";
import DefaultRoute from "./routes/default";
import JwtAuthPlugin from "./plugins/auth";
import SecureRoute from "./routes/secure";
import LoginRoute from "./routes/login";
const app = new App({
  routes: [DefaultRoute, SecureRoute, LoginRoute],
  plugins: [JwtAuthPlugin],
});

app.listen();
