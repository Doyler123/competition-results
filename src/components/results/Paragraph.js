import React from "react";


const Paragraph = ({ compData }) => {

    var comp1 = compData[0]
    var comp2
    if (compData.length > 1) {
        comp2 = compData[1]
    }

    var comp1Day = compData.length > 1 ? "Saturday" : "Wednesday";

    return (
        <div id="paragraph" style={{ marginTop: "50px", width: '95%', textAlign: 'justify' }}>
            {comp1 ? <p>
                Congratulations to <span style={{ color: 'rgb(0, 0, 255)' }}><strong> {comp1.main[0].name}
                </strong></span> on winning {comp1Day}s singles with a score of {comp1.main[0].score} Pts.
                In 2<sup>nd</sup> place was <strong> {comp1.main[1].name}</strong> with a score of {comp1.main[1].score} Pts.
            </p> : null}
            {comp2 ? <p>
                Sundays Open Singles was won by <span style={{ color: 'rgb(0, 0, 255)' }}><strong> {comp2.main[0].name}
                </strong></span>with a score of {comp2.main[0].score} Pts. In 2<sup>nd</sup> place was
                <strong> {comp2.main[1].name} </strong>with a score of {comp2.main[1].score} Pts.
            </p> : null}
            <p>Thanks to everyone for supporting our competitions and congratulations to all our winners.</p>
            <p>
                <br />
                <b>Regards</b>
            </p>
            <p>
                <br />
                <strong>Liam Lynch</strong>
                <br />
                <strong>Competitions Secretary</strong>
            </p>
        </div>
    )
}

export default Paragraph;