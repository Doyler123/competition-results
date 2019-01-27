import React from "react";


const TwosTable = (props) => {
    var twos4th = props.twos.filter((two) => (two.hole === "4th"))
    var twos6th = props.twos.filter((two) => (two.hole === "6th"))
    var twos13th = props.twos.filter((two) => (two.hole === "13th"))
    var twos15th = props.twos.filter((two) => (two.hole === "15th"))
    
    return (
        <table align="center" cellSpacing="0" id="Comp_Table_2s" style={{ marginTop: '25px' }}>
            <Twos twos={twos4th} />
            <Twos twos={twos6th} />
            <Twos twos={twos13th} />
            <Twos twos={twos15th} />
        </table>
    )
}

const Twos = ({ twos }) => {

    if (twos.length < 1) {
        return null;
    }

    return (
        <tbody>
            <TwosHead hole={twos[0].hole} />
            {twos.map((two, index) =>
                <TwosLine key={index} name={two.name} prize={two.prize} />
            )}
        </tbody>
    )
}

const TwosHead = ({ hole }) => (
    <tr id="twos-heading" className="Comp_Table_head">
        <th className="hole" nowrap="nowrap" scope="col"><div id="twos-hole">{hole} Two's</div></th>
        <th nowrap="nowrap" scope="col">Prize</th>
    </tr>
)

const TwosLine = ({ name, prize }) => (
    <tr id="twos-data" className="Comp_Table_Line">
        <td align="left" className="btmleft" nowrap="nowrap"><div id="twos-name">{name}</div></td>
        <td align="center" className="btmleft"><div id="twos-prize">{prize}</div></td>
    </tr>
)


export default TwosTable;