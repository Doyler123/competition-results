import React from "react";

import * as Constants from '../../assets/constants'

const MainTable = (props) => {

    let { date, format, holes, tees, main } = props.comp;
    return (
        <table id="sat_Comp_Table" border={0} cellPadding={0} cellSpacing={0} className="sat-table" style={{ marginTop: '40px' }}>
            <Caption
                date={date}
                format={format}
                holes={holes}
                tees={tees} />
            {main.filter(filterResults).map((player, index) =>
                <tbody>
                    <Head key={index} position={player.position} />
                    <Line
                        key={index}
                        name={player.name}
                        hcap={player.hcap}
                        club={player.club}
                        score={player.score}
                        prize={player.prize}
                        format={format}
                        index={index} />
                </tbody>
            )}
        </table>
    )

}

const Caption = ({ date, format, holes, tees }) => (
    <caption className="Comp_Table_Caption">
        <b>
            {date}<br />
            {format}<br />
            ({holes}, {tees})
        </b>
    </caption>
)

const Head = ({ position }) => (
    <tr className="Comp_Table_head">
        <th colSpan="5" nowrap="nowrap" scope="col">
            <span className="heading" style={{ color: 'black' }}><div id="heading" >{position}</div></span>
        </th>
    </tr>
)

const Line = ({ key, name, hcap, club, score, prize, format, index }) => {
    var highlight = index === 0 ? "specalt" : "btmleft";
    var scoreSuffix = Constants.FORMAT_SUFFIXS[format] ? Constants.FORMAT_SUFFIXS[format] : "" 
    return (
        <tr className="Comp_Table_Line">
            <td align="left" className={highlight} nowrap="nowrap" width="150">
                <b><div id="name" >{name}</div></b>
            </td>
            <td className={highlight} nowrap="nowrap" width="55"><div id="hcap" >{hcap}</div></td>
            <td className={highlight} nowrap="nowrap" width="55">
                <span style={{ fontSize: '0.7em' }}><div id="domestic" >{club}</div></span>
            </td>
            <td align="right" className={highlight} nowrap="nowrap" width="80"><div id="score" >{score + scoreSuffix}</div></td>
            <td className={highlight} nowrap="nowrap" width="60"><div id="prize" >{prize}</div></td>
        </tr>
    )
}

function filterResults(player) {
    return player.name !== "";
}

export default MainTable;