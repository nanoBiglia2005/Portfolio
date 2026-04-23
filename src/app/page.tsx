import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Home() {
  return <div>
    <header> Github </header>
    <main style={{display: "flex", flexDirection: "row"}}>
      <div style={{ display: "flex", flexDirection: "column"}}>
        <h1 style={{ color: "white", fontSize: "5rem", fontWeight: "bold"}}> Stefano Biglia </h1>
        <p style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold"}}> Técnico en Programación </p>
      </div>
      <div>
        <div>
          Sobre Mí          
        </div>
      </div>
    </main>
  
    </div>;
}