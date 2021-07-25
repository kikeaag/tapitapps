
import React from "react";

class FormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Ruben Alavarado'
                },
                {
                    id: 2,
                    name: 'Antonio Lopez'
                },
                {
                    id: 3,
                    name: 'Ricardo Morales'
                },
                {
                    id: 4,
                    name: 'Roberto Carlos'
                },
                {
                    id: 5,
                    name: 'Jorge Allende'
                }
            ],
            questions: [
                {
                    id: 1,
                    answer: true,
                    comment: ''
                },
                {
                    id: 2,
                    answer: true,
                    comment: ''
                },
                {
                    id: 3,
                    answer: true,
                    comment: ''
                },
                {
                    id: 4,
                    answer: true,
                    comment: ''
                },
                {
                    id: 5,
                    answer: true,
                    comment: ''
                },
            ]
        }

        this.radioButtonSelected = this.radioButtonSelected.bind(this) 

    }
    
    radioButtonSelected(e, questionNumber) {

        let newQuestions = this.state.questions.map((question, index) => {
          console.log(index)
          if (index === questionNumber) {
              question.answer = !this.state.questions[questionNumber].answer
              return question
          }
          return question
      })
      this.setState({
          questions: newQuestions
      })
        
    }
    
    
    
    render() {
        

        return (
            <div>
                <div className="form-group">
                    <label htmlFor="exampleSelect1" className="form-label mt-4">Selecciona un Alumno</label>
                    <select className="form-select" id="exampleSelect1">
                        {
                            this.state.users.map((user) => {
                                return <option>{user.name}</option>
                            })
                        }
                    </select>
                </div>

                <fieldset className="form-group">
                    <legend className="mt-4">1.- ¿ Temperatura menor a 37° ?</legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" checked={this.state.questions[0].answer === true} onChange={e => this.radioButtonSelected (e, 0) } className="form-check-input" name="optionsRadios" id="optionsRadios1" value={true} />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" checked={this.state.questions[0].answer === false} onChange={e => this.radioButtonSelected (e, 0)} className="form-check-input" name="optionsRadios" id="optionsRadios2" value={false} />
                                NO
                                </label>
                            </div>
                        </div>

                        
                        <div className="col-3 align-self-center" style={ this.state.questions[0].answer === true ? {visibility: 'hidden'} : {}}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Indique su temperatura" id="inputDefault" />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>

                <fieldset className="form-group">
                    <legend className="mt-4">2.- ¿ Identificas algún síntoma ?</legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input" 
                                    checked={this.state.questions[1].answer === true} 
                                    onChange={e => this.radioButtonSelected (e, 1) } 
                                    name="optionsRadios2" 
                                    id="optionsRadios1" 
                                    value={true} 
                                />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input" 
                                    checked={this.state.questions[1].answer === false} 
                                    onChange={e => this.radioButtonSelected (e, 1) }
                                    name="optionsRadios2" 
                                    id="optionsRadios2" 
                                    value={false} />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-3 align-self-center" style={ this.state.questions[1].answer === false ? {visibility: 'hidden'} : {}}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Indica los sintomas" id="inputDefault" />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>
                <fieldset className="form-group">
                    <legend className="mt-4">3.- ¿ Has asistido a algun lugar sin medidas de control sanitario ?</legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                type="radio" 
                                className="form-check-input" 
                                checked={this.state.questions[2].answer === true} 
                                onChange={e => this.radioButtonSelected (e, 2) }
                                name="optionsRadios3" 
                                id="optionsRadios1" 
                                value={true} />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input" 
                                    checked={this.state.questions[2].answer === false} 
                                    onChange={e => this.radioButtonSelected (e, 2) }
                                    name="optionsRadios3" 
                                    id="optionsRadios2" 
                                    value={false} />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-3 align-self-center" style={ this.state.questions[2].answer === false ? {visibility: 'hidden'} : {}}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Indica los lugares" id="inputDefault" />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>
                <fieldset className="form-group">
                    <legend className="mt-4">4.- ¿ Alguien en casa tiene Covid o tuviste contacto con alguien con este virus ?</legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                type="radio" 
                                className="form-check-input" 
                                checked={this.state.questions[3].answer === true} 
                                onChange={e => this.radioButtonSelected (e, 3) }
                                name="optionsRadios4" 
                                id="optionsRadios1" 
                                value={true} 
                            />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input"
                                    checked={this.state.questions[3].answer === false} 
                                    onChange={e => this.radioButtonSelected (e, 3) } 
                                    name="optionsRadios4" 
                                    id="optionsRadios2" 
                                    value={false} 
                                />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-3 align-self-center" style={ this.state.questions[3].answer === false ? {visibility: 'hidden'} : {}}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Comentario" id="inputDefault" />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>
                <fieldset className="form-group">
                    <legend className="mt-4">5.- ¿ Hiciste un viaje cuyo regreso fue dentro de los 14 dias anteriores ?</legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input"
                                    checked={this.state.questions[4].answer === true} 
                                    onChange={e => this.radioButtonSelected (e, 4) } 
                                    name="optionsRadios5" 
                                    id="optionsRadios1" 
                                    value={true} 
                                />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input 
                                    type="radio" 
                                    className="form-check-input"
                                    checked={this.state.questions[4].answer === false} 
                                    onChange={e => this.radioButtonSelected (e, 4) }  
                                    name="optionsRadios5" 
                                    id="optionsRadios2" 
                                    value={false} 
                                />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-3 align-self-center" style={ this.state.questions[4].answer === false ? {visibility: 'hidden'} : {}}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Fecha de regreso" id="inputDefault" />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>
            </div>
        );
    }

}

export default FormComponent;