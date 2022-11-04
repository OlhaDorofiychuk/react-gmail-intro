import Toolbar from "./toolbar";
import EmailHeader from "./header";
import Section from "./section";
import EmailActions from "./emailActions";

function Main() {
  return (
    <main className="email-view">
      <Toolbar />
      <article className="email-content">
        <div className="title">
          <h1>Welcome to Flaticon</h1>
        </div>
        <EmailHeader />
        <Section />
        <EmailActions />
      </article>
    </main>
  );
}
export default Main;
