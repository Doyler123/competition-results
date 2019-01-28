import React from "react"
import Layout from "../components/layout";
import ResultsTable from '../components/results/ResultsTable'
import ResultsForm from '../components/results/ReaultsForm'
import {Grid, Row, Col} from 'react-bootstrap'
import axios from 'axios'

import * as Constants from '../assets/constants'

class FileInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleResultsJson = this.handleResultsJson.bind(this);
        this.handlePrizeBreakdown = this.handlePrizeBreakdown.bind(this);
        this.resultsFileInput = React.createRef();
        this.prizeBreakdownInput = React.createRef();
        this.state = { json : [], html : "", breakdownFile : "" }
    }

    handleResultsJson(event) {   
        event.preventDefault();
        var file = this.resultsFileInput.current.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onloadend = (evt) => {
                this.setState({ json: JSON.parse(evt.target.result) });
            }
        }
    }

    handlePrizeBreakdown(event) {   
        event.preventDefault();
        var file = this.prizeBreakdownInput.current.files[0];
        if (file) {
            this.setState({...this.state, breakdownFile : file.name})
            var formData = new FormData();
            formData.append('prize-breakdown', file);
            axios.post(Constants.FILE_UPLOAD_URL, formData)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }

    handleJsonChange = (event) =>{
        this.setState({...this.state, json : JSON.parse(event.target.value)})
    }

    handleInputChange = event => {
        const json = { ...this.state.json }
        const target = event.target
        const index = parseInt(target.name.split('-').pop())
        const prop = target.name.split('-')[0]
        const value = target.value;

        json[index][prop] = value;
        this.setState(json);
    }
    
    render(){
        return <Layout>
            <Grid>
              <Row className="show-grid">
                <Col md={6}>
                  <ResultsForm json={this.state.json}
                  resultsFileInput={this.resultsFileInput}
                  handleResultsJson={this.handleResultsJson}
                  handleInputChange={this.handleInputChange}
                  prizeBreakdownInput={this.prizeBreakdownInput}
                  handlePrizeBreakdown={this.handlePrizeBreakdown}
                  handleJsonChange={this.handleJsonChange}
                  />
                </Col>
                <Col md={6}>
                  <ResultsTable compData={this.state.json} breakdownFile={this.state.breakdownFile} />
                    {this.state.json.length > 0 ? <div className="container-fluid margin-bottom-20">
                        <div className="container-fluid margin-bottom-20">
                            <label htmlFor="htmlOut" className="control-label">HTML</label>
                            <div id="htmlOut" style={{height: '300px', border: '1px solid #ccc', font: '16px/26px Georgia, Garamond, Serif', overflow: 'auto'}} />
                        </div>
                    </div> : null}      
                </Col>
              </Row>
            </Grid>
          </Layout>;
    }
}

export default FileInput;
