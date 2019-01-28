import React from "react";
import ReactDOM from 'react-dom'

import MainTable from './MainTable';
import TwosTable from './TwosTable';
import Paragraph from './Paragraph';
import ImageLink from './ImageLink';

class ResultsTable extends React.Component {

    printHTML = () => {
        let htmlOut = document.getElementById("htmlOut");
        if(htmlOut){
            let resultsTableNode = ReactDOM.findDOMNode(this)
            if(resultsTableNode){ 
                htmlOut.textContent = resultsTableNode.outerHTML;
            }
        }
    }
    
    componentDidMount() {
        this.printHTML()
    }

    componentDidUpdate() {
        this.printHTML()
    }

    render() {
        // let { compData, breakdownInfo } = this.props;
        let { compData, breakdownFile} = this.props;

        return compData && compData.length > 0 ? 
        <div className="table-editable" align="center" style={{ marginBottom : "15px" }}>

            {compData.map((comp, index)=>{
                return( 
                <div>
                    <MainTable comp={comp} />
                    <TwosTable twos={comp.twos} />
                </div>)
            })}

            {breakdownFile ? <ImageLink
               href={"http://www.luttrellstowncastlegolfmembers.com/images/Luttrellstown/Competitions/2018/" + breakdownFile}
               imgUrl={"http://www.luttrellstowncastlegolfmembers.com/images/Luttrellstown/PDF.png"}
               imgText={"Winners & Prize Breakdown"}
               imgWidth={50} 
           /> : null}

             <ImageLink
                href={"https://www.masterscoreboard.co.uk/SocietyIndex.php?CWID=24259"}
                imgUrl={"http://www.luttrellstowncastlegolfmembers.com/images/Luttrellstown/Masterscoreboard.png"}
                imgText={"Full Competition Results"}
                imgWidth={180} 
            />

            <Paragraph compData={compData}/>
            
          </div> : null;
    }
}

export default ResultsTable;