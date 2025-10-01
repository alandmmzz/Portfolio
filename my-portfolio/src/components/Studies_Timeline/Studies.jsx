import { useState, useEffect } from 'react';

function Studies({ data, onSelectStudy }) {
    const secondLevel = data.filter(est => est.nivel === "second");

    // -1 = ninguno seleccionado
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="studies-timeline">
                <ul className="second-level-studies">
                    {secondLevel
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
        </div>
    );
};

export default Studies;