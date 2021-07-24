
import React from "react";

class FormComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="form-group">
                    <label for="exampleSelect1" className="form-label mt-4">Selecciona un Alumno</label>
                    <select className="form-select" id="exampleSelect1">
                        <option>Ruben Alavarado</option>
                        <option>Antonio Lopez</option>
                        <option>Ricardo Morales</option>
                        <option>Roberto Carlos</option>
                        <option>Jorge Allende</option>
                    </select>
                </div>

                <fieldset className="form-group">
                    <legend className="mt-4">¿ Temperatura menor a 37° ?</legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1"/>
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-3 align-self-center">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Indique su temperatura" id="inputDefault" />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>

                <fieldset className="form-group">
                    <legend className="mt-4">¿ Identificas algún síntoma ?</legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios2" id="optionsRadios1" value="option1" />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios2" id="optionsRadios2" value="option2" />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-3 align-self-center">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Indica los sintomas" id="inputDefault" />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>
                <fieldset className="form-group">
                    <legend className="mt-4">¿ Has asistido a algun lugar sin medidas de control sanitario ?</legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios3" id="optionsRadios1" value="option1" />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios3" id="optionsRadios2" value="option2" />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-3 align-self-center">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Indica los lugares" id="inputDefault" />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>
                <fieldset className="form-group">
                    <legend className="mt-4">¿ Alguien en casa tiene Covid o tuviste contacto con alguien con este virus ?</legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios4" id="optionsRadios1" value="option1" />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios4" id="optionsRadios2" value="option2" />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-3 align-self-center">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Comentario" id="inputDefault" />
                            </div>
                        </div>

                    </div>
                    
                </fieldset>
                <fieldset className="form-group">
                    <legend className="mt-4">¿ Hiciste un viaje cuyo regreso fue dentro de los 14 dias anteriores ?</legend>

                    <div className="row justify-content-start ">
                        <div className="col-7 align-self-center">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios5" id="optionsRadios1" value="option1" />
                                SI
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios5" id="optionsRadios2" value="option2" />
                                NO
                                </label>
                            </div>
                        </div>

                        <div className="col-3 align-self-center">
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