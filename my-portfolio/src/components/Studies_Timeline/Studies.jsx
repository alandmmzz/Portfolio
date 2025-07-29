const Studies = ({ data }) => {
    const firstLevel = data.filter(est => est.nivel === "first");
    const secondLevel = data.filter(est => est.nivel === "second");

    return (
        <div className="studies-timeline">
            <ul className="second-level-studies">
                {secondLevel.map((est, index) => (
                    <li key={index} className="study-item has-details">
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