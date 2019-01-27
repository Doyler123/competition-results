import React from 'react'

import * as Constants from '../../assets/constants'

const ResultsForm = (props) =>{

    let {json,
        resultsFileInput,
        handleResultsJson,
        handleInputChange,
        prizeBreakdownInput,
        handlePrizeBreakdown,
        handleJsonChange} = props

    return(
        <form>
            <div>
                <div className="container-fluid"><h4>Results</h4></div>
                <div className="container-fluid border rounded margin-bottom-20">
                    <div className="form-group">
                        <label htmlFor="file-import" className="control-label">Results Json</label>
                        <input required type="file" ref={resultsFileInput} onChange={handleResultsJson} className="form-control-file" />
                    </div>
                </div>
                
                {json.map((comp, index) => (
                    <div>
                        <div className="container-fluid"><h4>{"Comp" + index}</h4></div>
                        <div className="container-fluid border rounded margin-bottom-20">
                            <div className="form-group">
                                <label htmlFor="sat-holes_id" className="control-label">Date</label>
                                <input type="text" value={json[index]['date']} className="form-control" name={"date-" + index} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sat-tees_id" className="control-label">Format</label>
                                {/* <input type="text" value={json[index]['format']} className="form-control" name={"format-" + index} onChange={handleInputChange} /> */}
                                <select className="form-control" value={json[index]['format']} name={"format-" + index} onChange={handleInputChange}>
                                    <option value={Constants.STAPLEFORD}>{Constants.STAPLEFORD}</option>
                                    <option value={Constants.MEDAL}>{Constants.MEDAL}</option>
                                    <option value={Constants.VPAR}>{Constants.VPAR}</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="sat-holes_id" className="control-label">Number of Holes</label>
                                <input type="text" value={json[index]['holes']} className="form-control" name={"holes-" + index} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sat-tees_id" className="control-label">Tees</label>
                                <input type="text" value={json[index]['tees']} className="form-control" name={"tees-" + index} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                ))}
                
                <div>
                    <div className="container-fluid"><h4>Prize Breakdown</h4></div>
                    <div className="container-fluid border rounded margin-bottom-20">
                        <div className="form-group">
                            <label htmlFor="prize-breakdown" className="control-label">Breakdown File</label>
                            <input type="file" ref={prizeBreakdownInput} className="form-control-file" onChange={handlePrizeBreakdown} name="prize-breakdown" />
                        </div>
                    </div>
                </div>

                {json.length > 0 ? <div className="container-fluid border rounded margin-bottom-20">
                    <div className="form-group">
                        <label htmlFor="file-import" className="control-label">Breakdown File</label>
                        <textarea class="form-control" rows="15" value={JSON.stringify(json, null, 2)} onChange={handleJsonChange} />
                    </div>
                </div> : null}

            </div>
        </form>
    )

}


export default ResultsForm;