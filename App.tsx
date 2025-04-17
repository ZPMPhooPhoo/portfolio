import { ProjectSection } from "./src/components/project-section";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="min-h-screen bg-black text-white">
        {/* Your other sections would go here */}
        <ProjectSection />
        {/* More sections */}
      </main>
    </div>
  );
}

export default App;
