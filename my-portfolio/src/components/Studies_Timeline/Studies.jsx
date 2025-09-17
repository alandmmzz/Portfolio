import { useState, useEffect } from 'react';

function Studies({ data, onSelectStudy }) {
    const institutions = ["Coderhouse", "Plan Ceibal", "UdelaR"];
    const firstLevel = data.filter(est => est.nivel === "first");
    const secondLevel = data.filter(est => est.nivel === "second");

    // -1 = ninguno seleccionado
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="studies-timeline">
            {institutions.map((inst, i) => (
                <ul key={i} className="second-level-studies">
                    {secondLevel
                        .filter((est) => est.institucion === inst)
                        .map((est, j) => (
                        <li key={j} className={`study-item has-details ${activeIndex === j ? "active" : ""}`} onClick={() => { onSelectStudy(est); setActiveIndex(j); }} >
                            <div className="study-circle"></div>
                            <h4>{est.titulo}</h4>
                            <p>{est.institucion} - {est.año}</p>
                            <ul className="studies-details-list">
                                {est.detalles.map((detalle, i) => (
                                    <li key={i} className="studies-detail">
                                        <div className="study-circle"></div>
                                        <p>{detalle}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            ))}


            <div className="studies-connector">
                <div className="connector-line"></div>
            </div>

            <ul className="first-level-studies">
                {firstLevel.map((est, index) => (
                    <li key={index}>
                        <div className="study-circle"></div>
                        <h3>{est.titulo}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Studies;