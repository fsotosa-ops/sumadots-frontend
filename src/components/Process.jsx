// Archivo: src/components/Process.jsx
import { useState } from 'react'; 
import logoSumaIcon from '../assets/suma-icon.svg'; 

function Process() {
  
  const [activeStep, setActiveStep] = useState(1);
  
  // --- (Funciones de dibujo del SVG sin cambios) ---
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  const describeArc = (x, y, radiusInner, radiusOuter, startAngle, endAngle) => {
    const startOuter = polarToCartesian(x, y, radiusOuter, endAngle);
    const endOuter = polarToCartesian(x, y, radiusOuter, startAngle);
    const startInner = polarToCartesian(x, y, radiusInner, endAngle);
    const endInner = polarToCartesian(x, y, radiusInner, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", startOuter.x, startOuter.y,
      "A", radiusOuter, radiusOuter, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
      "L", endInner.x, endInner.y,
      "A", radiusInner, radiusInner, 0, largeArcFlag, 1, startInner.x, startInner.y,
      "Z"
    ].join(" ");
  }
  const describeTextArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, startAngle);
    const end = polarToCartesian(x, y, radius, endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${start.x},${start.y} A ${radius},${radius} 0 ${largeArcFlag} 1 ${end.x},${end.y}`;
  }

  // --- Configuración del Gráfico ---
  const rOuter = 180; const rInner = 120; const rText = 150;
  const arc1 = describeArc(200, 200, rInner, rOuter, -88, -2);
  const arc2 = describeArc(200, 200, rInner, rOuter, 2, 88);
  const arc3 = describeArc(200, 200, rInner, rOuter, 92, 178);
  const arc4 = describeArc(200, 200, rInner, rOuter, 182, 268);
  const path1 = describeTextArc(200, 200, rText, -88, -2);
  const path2 = describeTextArc(200, 200, rText, 2, 88);
  const path3 = describeTextArc(200, 200, rText, 92, 178);
  const path4 = describeTextArc(200, 200, rText, 182, 268);
  
  return (
    <section id="process" className="process">
      <div className="container">
        <h2 className="section-title">Cómo trabajamos</h2>
        <p className="section-subtitle">Transparente, iterativo y orientado a resultados.</p>
        
        <div 
          className="process-cycle-container" 
          onMouseLeave={() => setActiveStep(1)}
        >
          <div className="process-svg-wrapper">
            
            <svg className="process-cycle-svg" viewBox="0 0 400 400">
              <defs>
                <path id="textPath1" d={path1} />
                <path id="textPath2" d={path2} />
                <path id="textPath3" d={path3} />
                <path id="textPath4" d={path4} />
              </defs>

              <g className="process-rotating-parts">
                {/* 1. Descubrimiento */}
                <g 
                  className={`process-segment ${activeStep === 1 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveStep(1)}
                >
                  <path className="segment-bg" d={arc1} />
                  <text className="cycle-text">
                    <textPath href="#textPath1" startOffset="50%" textAnchor="middle">
                      1 · Descubrimiento
                    </textPath>
                  </text>
                </g>

                {/* 2. Propuesta de Valor */}
                <g 
                  className={`process-segment ${activeStep === 2 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveStep(2)}
                >
                  <path className="segment-bg" d={arc2} />
                  <text className="cycle-text">
                    <textPath href="#textPath2" startOffset="50%" textAnchor="middle">
                      2 · Propuesta de Valor
                    </textPath>
                  </text>
                </g>

                {/* 3. Implementación Ágil */}
                <g 
                  className={`process-segment ${activeStep === 3 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveStep(3)}
                >
                  <path className="segment-bg" d={arc3} />
                  <text className="cycle-text">
                    <textPath href="#textPath3" startOffset="50%" textAnchor="middle">
                      3 · Implementación Ágil
                    </textPath>
                  </text>
                </g>

                {/* 4. Optimización */}
                <g 
                  className={`process-segment ${activeStep === 4 ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveStep(4)}
                >
                  <path className="segment-bg" d={arc4} />
                  <text className="cycle-text">
                    <textPath href="#textPath4" startOffset="50%" textAnchor="middle">
                      4 · Optimización
                    </textPath>
                  </text>
                </g>
              </g> {/* --- Fin de rotating-parts --- */}

              {/* ========================================= */}
              {/* === ¡CAMBIO AQUÍ! === */}
              {/* El ícono ahora es más grande (120x120) y está centrado (140, 140) */}
              <image 
                href={logoSumaIcon} 
                x="100" 
                y="100" 
                height="200" 
                width="200" 
                className="process-center-icon"
              />
              {/* ========================================= */}
            </svg>
          </div> {/* Fin de process-svg-wrapper */}
          
          <div className="process-description-box">
            {activeStep === 1 && (
              <div className="description-item">
                <h3>1 · Descubrimiento</h3>
                <p>Entendemos tu misión, tus datos y tus desafíos actuales.</p>
              </div>
            )}
            {activeStep === 2 && (
              <div className="description-item">
                <h3>2 · Propuesta de Valor</h3>
                <p>Diseñamos un plan de acción a medida con impacto y ROI proyectado.</p>
              </div>
            )}
            {activeStep === 3 && (
              <div className="description-item">
                <h3>3 · Implementación Ágil</h3>
                <p>Conectamos los "dots". Ejecutamos el plan con entregas rápidas.</p>
              </div>
            )}
            {activeStep === 4 && (
              <div className="description-item">
                <h3>4 · Optimización</h3>
                <p>Medimos, reportamos y mejoramos los resultados continuamente.</p>
              </div>
            )}
          </div> {/* Fin de process-description-box */}

        </div> {/* Fin de process-cycle-container */}
      </div>
    </section>
  );
}

export default Process;