import { useState, useEffect } from 'react';

function Studies({ data, onSelectStudy }) {
    const institutions = ["Coderhouse", "Plan Ceibal", "UdelaR"];
    const firstLevel = data.filter(est => est.nivel === "first");
    const secondLevel = data.filter(est => est.nivel === "second");

    const [selectedIndex, setSelectedIndex] = useState([null, null]);

    useEffect(() => {
        const items = document.querySelectorAll(".study-item.has-details");

        const handleMouseEnter = (e) => e.currentTarget.classList.add("active");
        const handleMouseLeave = (e) => e.currentTarget.classList.remove("active");

        items.forEach((item) => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            items.forEach((item) => {
                item.removeEventListener("mouseenter", handleMouseEnter);
                item.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);


    return (
        <div className="studies-timeline">
            {institutions.map((inst, i) => (
                <ul key={i} className="second-level-studies">
                    {secondLevel
                        .filter((est) => est.institucion === inst)
                        .map((est, j) => (
                        <li key={j} className={`study-item has-details ${selectedIndex[0] === i && selectedIndex[1] === j ? "selected" : ""}`} onClick={() => { onSelectStudy(est); setSelectedIndex([i,j]); }}>
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