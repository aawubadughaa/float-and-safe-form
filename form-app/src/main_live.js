import React, { useState } from 'react';
import { SelectComponent, placeforholding, Input_box, Checklist } from './reusable';
import { boxStyle, titleBoxStyle, listStyle, buttonStyle, inputStyle } from './allboxstyles';
import { vessels, captains, powertrainTechnicianSupervisors, safetyEquipments, operationalEquipments, testedSystems, traileringSafetySteps } from './data';

const FloatComponent = () => {
  const [vessel, setVessel] = useState('');
  const [dateOfLaunch, setDateOfLaunch] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [expectedReturnDate, setExpectedReturnDate] = useState('');
  const [expectedReturnTime, setExpectedReturnTime] = useState('');
  const [captain, setCaptain] = useState('');
  const [secondInCommand, setSecondInCommand] = useState('');
  const [secondInCommandPhone, setSecondInCommandPhone] = useState('');
  const [onLandContactName, setOnLandContactName] = useState('');
  const [onLandContactPhone, setOnLandContactPhone] = useState('');
  const [safetyBoatWater, setSafetyBoatWater] = useState('');
  const [safetyBoatStandby, setSafetyBoatStandby] = useState('');
  const [tripDescription, setTripDescription] = useState('');
  const [personsOnboard, setPersonsOnboard] = useState('');
  const [powertrainTechnicianSupervisor, setPowertrainTechnicianSupervisor] = useState('');

  const logData = () => {
    console.log({
      vessel,
      dateOfLaunch,
      departureTime,
      expectedReturnDate,
      expectedReturnTime,
      captain,
      secondInCommand,
      secondInCommandPhone,
      powertrainTechnicianSupervisor,
      onLandContactName,
      onLandContactPhone,
      safetyBoatWater,
      safetyBoatStandby,
      tripDescription,
      personsOnboard,
    });
  };

  return (
    <div style={boxStyle}>
      <div style={titleBoxStyle}>
        <h1>Flux Marine Float Plan</h1>
        <h3>Please complete each and every time a Flux Marine vessel is launched.</h3>
      </div>
      <div>
        <ol style={listStyle}>
          <li>
            Vessel Being Launched
            <div style={inputStyle}>
              <SelectComponent
                options={vessels}
                onChange={e => setVessel(e)}
              />
            </div>
          </li>
          <li>
            Date of Launch
            <div style={inputStyle}>
              <Input_box
                placeholder={placeforholding.a}
                onChange={e => setDateOfLaunch(e.target.value)}
              />
            </div>
          </li>
          <li>
            Departure Time
            <div style={inputStyle}>
              <Input_box
                placeholder={placeforholding.b}
                onChange={e => setDepartureTime(e.target.value)}
              />
            </div>
          </li>
          <li>
            Expected Return Date
            <div style={inputStyle}>
              <Input_box
                placeholder={placeforholding.a}
                onChange={e => setExpectedReturnDate(e.target.value)}
              />
            </div>
          </li>
          <li>
            Expected Return Time
            <div style={inputStyle}>
              <Input_box
                placeholder={placeforholding.b}
                onChange={e => setExpectedReturnTime(e.target.value)}
              />
            </div>
          </li>
          <li>
            Captain
            <div style={inputStyle}>
              <SelectComponent
                options={captains}
                onChange={e => setCaptain(e)}
              />
            </div>
          </li>
          <li>
            Second-in-Command (In case Captain becomes incapacitated)
            <div style={inputStyle}>
              <Input_box
                placeholder={placeforholding.b}
                onChange={e => setSecondInCommand(e.target.value)}
              />
            </div>
          </li>
          <li>
            Second-in-Command Phone #
            <div style={inputStyle}>
              <Input_box
                placeholder={placeforholding.b}
                onChange={e => setSecondInCommandPhone(e.target.value)}
              />
            </div>
          </li>
          <li>
            Powertrain Technician Supervisor
            <div style={inputStyle}>
              <SelectComponent
                options={powertrainTechnicianSupervisors}
                onChange={e => setPowertrainTechnicianSupervisor(e)}
              />
            </div>
          </li>
          <li>
          Name of On-Land Point of Contact (Supervisor on duty for emergency response)
            <div style={inputStyle}>
              <Input_box
                placeholder={placeforholding.b}
                onChange={e => setOnLandContactName(e.target.value)}
              />
            </div>
          </li>
          <li>
            On-Land Point of Contact Phone #
            <div style={inputStyle}>
              <Input_box
                placeholder={placeforholding.b}
                onChange={e => setOnLandContactPhone(e.target.value)}
              />
            </div>
          </li>
          <li>
          Will you have a safety boat on the water with you?
            <div style={inputStyle}>
              <input type="radio" id="yes" name="hotstandby" value="Yes"/>
              <label for="yes">Yes</label>
              <br/>
              <br/>
              <input type='radio' id="no" name='hotstandby' value='No'/>
              <label for="no">No</label>
            </div>
          </li>
          <li>
          Will you have a safety boat on Hot Standby?
            <div style={inputStyle}>
              <input type="radio" id="yes" name="hotstandby" value="Yes"/>
              <label for="yes">Yes</label>
              <br/>
              <br/>
              <input type='radio' id="no" name='hotstandby' value='No'/>
              <label for="no">No</label>
            </div>
          </li>
          <li>
            Trip Description
            <div style={inputStyle}>
              <Input_box
                placeholder={placeforholding.b}
                onChange={e => setTripDescription(e.target.value)}
              />
            </div>
          </li>
          <li>
            Persons Onboard
            <div style={inputStyle}>
              <Input_box
                placeholder={placeforholding.b}
                onChange={e => setPersonsOnboard(e.target.value)}
              />
            </div>
          </li>
        </ol>
      </div>
      <button onClick={logData} style={buttonStyle}>Submit</button>
    </div>
  );
};

const SafeComponent = () => {
  const [safetyEquipment, setSafetyEquipment] = useState('');
  const [operationalEquipment, setOperationalEquipment] = useState('');
  const [testedSystem, setTestedSystem ] = useState('');
  const [traileringSafetyStep, setTraileringSafetyStep] = useState('');

  const logData = () => {
    console.log({
        safetyEquipment,
        operationalEquipment,
        testedSystem,
        traileringSafetyStep,
    });
  };

  return (
    <div style={boxStyle}>
      <div style={titleBoxStyle}>
        <h1>Flux Marine Vessel Safety Checklist</h1>
        <h3>Please complete each and every time a Flux Marine vessel is launched.</h3>
      </div>
      <div>
        <ol style={listStyle}>
          <li>
            Please certify that the following safety equipment is onboard the vessel prior to departing from Flux Marine HQ:
            <div style={inputStyle}>
              <Checklist
                options={safetyEquipments}
                onChange={e => setSafetyEquipment(e)}
              />
            </div>
          </li>
          <li>
            Please certify that the following operational equipment is onboard the vessel prior to departing Flux Marine HQ:
            <div style={inputStyle}>
              <Checklist
                options={operationalEquipments}
                onChange={e => setOperationalEquipment(e)}
              />
            </div>
          </li>
          <li>
          Please certify that the following systems work and have been tested prior to departing from Flux Marine HQ:
            <div style={inputStyle}>
              <Checklist
                options={testedSystems}
                onChange={e => setTestedSystem(e)}
              />
            </div>
          </li>
          <li>
          Please certify the following trailering safety steps are completed:
            <div style={inputStyle}>
              <Checklist
                options={traileringSafetySteps}
                onChange={e => setTraileringSafetyStep(e)}
              />
            </div>
          </li>
          <li style={inputStyle}>
            Drain plugs must be installed prior to departing from Flux Marine HQ, and must be double checked on the ramp prior to launch. Were the Plugs installed in the boat at the time of departure?
              <br/>
              <br/>
              <input type="radio" id="yes" name="hotstandby" value="Yes"/>
              <label for="yes">Yes</label>
              <br/>
              <br/>
              <input type='radio' id="no" name='hotstandby' value='No'/>
              <label for="no">No</label>
          </li>
          <li>
            Did you check the weather, and are the conditions safe to launch and operate the vessel?
              <br/>
              <br/>
              <input type="radio" id="yes" name="hotstandby" value="Yes"/>
              <label for="yes">Yes</label>
              <br/>
              <br/>
              <input type='radio' id="no" name='hotstandby' value='No'/>
              <label for="no">No</label>  
          </li>
        </ol>
      </div>
      <button onClick={logData} style={buttonStyle}>Submit</button>
    </div>
  );
};

const ParentComponent = () => (
  <div>
    <FloatComponent/>
    <div style={{ marginTop: '50px' }}>
      <SafeComponent/>
    </div>
  </div>
);

export default ParentComponent;
