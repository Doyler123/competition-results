import React from "react";

const ImageLink = ({ href, imgUrl, imgText, imgWidth }) => (
    <div id="breakdowns" style={{ textAlign: "center", marginTop: "25px" }}>
        <table width="100%">
            <tbody>
                <tr>
                    <td>
                        <a href={href} onClick={(event) => { onClickImageLink(href, event) }}>
                            <img src={imgUrl} width={imgWidth} />
                            <br />
                        </a>
                        <a href={href} onClick={(event) => { onClickImageLink(href, event) }}>
                            <strong>{imgText}</strong>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)

function onClickImageLink(href, event) {
    event.preventDefault()
    window.open(href, '', 'resizable=yes,location=no,menubar=no,scrollbars=no,status=no,toolbar=yes,fullscreen=no,dependent=no,width=1040,height=900,left=200,top=200,status');
}

export default ImageLink;