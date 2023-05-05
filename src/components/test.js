import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function PCOSform() {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const response = await axios
      .post("http://localhost:5000/predict", formData)
      .then((res) => {
        console.log(res);
        setResult(res.data[0]);
      })
      .catch((err) => {
        console.log("Error!! in handleSubmit");
      });
    // setResult(response.data.prediction_text);
  };

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch('/predict', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //     .then(response => response.json())
  //     .then(data => setResult(data))
  //     .catch(error => console.error(error));
  // };

  return (
    <div>
      <Form autoComplete="true" onSubmit={handleSubmit}>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="Age (yrs)"
            value={formData.Age}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="weight">
          <Form.Label>Weight (Kg)</Form.Label>
          <Form.Control
            type="number"
            name="Weight (Kg)"
            value={formData["Weight (Kg)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="height">
          <Form.Label>Height (Cm)</Form.Label>
          <Form.Control
            type="number"
            name="Height(Cm)"
            value={formData["Height (Cm)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="bmi">
          <Form.Label>BMI</Form.Label>
          <Form.Control
            type="number"
            name="BMI"
            value={formData["BMI"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="bloodGroup">
          <Form.Label>Blood Group</Form.Label>
          <Form.Control
            type="text"
            name="Blood Group"
            value={formData["Blood Group"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="pulseRate">
          <Form.Label>Pulse rate (bpm)</Form.Label>
          <Form.Control
            type="number"
            name="Pulse rate(bpm)"
            value={formData["Pulse rate (bpm)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="rr">
          <Form.Label>RR (breaths/min)</Form.Label>
          <Form.Control
            type="number"
            name="RR (breaths/min)"
            value={formData["RR (breaths/min)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="hb">
          <Form.Label>Hb (g/dl)</Form.Label>
          <Form.Control
            type="number"
            name="Hb(g/dl)"
            value={formData["Hb(g/dl)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="cycle">
          <Form.Label>Cycle (R/I)</Form.Label>
          <input
            type="number"
            className="form-control"
            name="Cycle(R/I)"
            value={formData["Cycle(R/I)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="cycleLength">
          <Form.Label>Cycle length (days)</Form.Label>
          <Form.Control
            type="number"
            name="Cycle length(days)"
            value={formData["Cycle length(days)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="marriageStatus">
          <Form.Label>Marriage Status (Yrs)</Form.Label>
          <Form.Control
            type="number"
            name="Marraige Status (Yrs)"
            value={formData["Marraige Status (Yrs)"]}
            onChange={handleChange}
          />

          <Form.Group controlId="pregnant">
            <Form.Label>Pregnant (Y/N)</Form.Label>
            <Form.Control
              type="number"
              name="Pregnant(Y/N)"
              value={formData["Pregnant(Y/N)"]}
              onChange={handleChange}
              min="0"
              max="1"
            />
          </Form.Group>
          <Form.Group controlId="num-abortions">
            <Form.Label>No. of abortions</Form.Label>
            <Form.Control
              type="number"
              name="No. of aborptions"
              value={formData["No. of aborptions"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="ibhcg">
            <Form.Label>I beta-HCG (mIU/mL)</Form.Label>
            <Form.Control
              type="number"
              name="I beta-HCG(mIU/mL)"
              value={formData["I beta-HCG(mIU/mL)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="iibhcg">
            <Form.Label>II beta-HCG (mIU/mL)</Form.Label>
            <Form.Control
              type="number"
              name="II beta-HCG(mIU/mL)"
              value={formData["II beta-HCG(mIU/mL)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="fsh">
            <Form.Label>FSH (mIU/mL)</Form.Label>
            <Form.Control
              type="number"
              name="FSH(mIU/mL)"
              value={formData["FSH(mIU/mL)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="lh">
            <Form.Label>LH (mIU/mL)</Form.Label>
            <Form.Control
              type="number"
              name="LH(mIU/mL)"
              value={formData["LH(mIU/mL)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="fsh-lh">
            <Form.Label>FSH/LH</Form.Label>
            <Form.Control
              type="number"
              name="FSH/LH"
              value={formData["FSH/LH"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="hip">
            <Form.Label>Hip (inch)</Form.Label>
            <Form.Control
              type="number"
              name="Hip(inch)"
              value={formData["Hip(inch)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="waist">
            <Form.Label>Waist (inch)</Form.Label>
            <Form.Control
              type="number"
              name="Waist(inch)"
              value={formData["Waist(inch)"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="waist-hip">
            <Form.Label>Waist:Hip Ratio</Form.Label>
            <Form.Control
              type="number"
              name="Waist:Hip Ratio"
              value={formData["Waist:Hip Ratio"]}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="tsh">
            <Form.Label>TSH (mIU/L)</Form.Label>
            <Form.Control
              type="number"
              name="TSH (mIU/L)"
              value={formData["TSH (mIU/L)"]}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Group>

        <Form.Group controlId="amh">
          <Form.Label>AMH(ng/mL)</Form.Label>
          <Form.Control
            type="text"
            name="AMH(ng/mL)"
            value={formData["AMH(ng/mL)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="prl">
          <Form.Label>PRL(ng/mL)</Form.Label>
          <Form.Control
            type="text"
            name="PRL(ng/mL)"
            value={formData["PRL(ng/mL)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="vitd3">
          <Form.Label>Vit D3 (ng/mL)</Form.Label>
          <Form.Control
            type="text"
            name="Vit D3 (ng/mL)"
            value={formData["Vit D3 (ng/mL)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="prg">
          <Form.Label>PRG(ng/mL)</Form.Label>
          <Form.Control
            type="text"
            name="PRG(ng/mL)"
            value={formData["PRG(ng/mL)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="weight-gain">
          <Form.Label>Weight gain(Y/N)</Form.Label>
          <Form.Control
            type="number"
            name="Weight gain(Y/N)"
            value={formData["Weight gain(Y/N)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="hair-growth">
          <Form.Label>hair growth(Y/N)</Form.Label>
          <Form.Control
            type="number"
            name="hair growth(Y/N)"
            value={formData["hair growth(Y/N)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="skin-darkening">
          <Form.Label>Skin darkening (Y/N)</Form.Label>
          <Form.Control
            type="number"
            name="Skin darkening (Y/N)"
            value={formData["Skin darkening (Y/N)"]}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="hair-loss">
          <Form.Label>Hair loss(Y/N)</Form.Label>
          <Form.Control
            type="number"
            name="Hair loss(Y/N)"
            value={formData["Hair loss(Y/N)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="pimples">
          <Form.Label>Pimples(Y/N)</Form.Label>
          <Form.Control
            type="text"
            name="Pimples(Y/N)"
            value={formData["Pimples(Y/N)"]}
            onChange={handleChange}
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </Form.Group>

        <Form.Group controlId="fastfood">
          <Form.Label>Fast food (Y/N)</Form.Label>
          <Form.Control
            type="text"
            name="Fast food (Y/N)"
            value={formData["Fast food (Y/N)"]}
            onChange={handleChange}
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </Form.Group>

        <Form.Group controlId="exercise">
          <Form.Label>Reg.Exercise(Y/N)</Form.Label>
          <Form.Control
            type="text"
            name="Reg.Exercise(Y/N)"
            value={formData["Reg.Exercise(Y/N)"]}
            onChange={handleChange}
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </Form.Group>

        <Form.Group controlId="bpSystolic">
          <Form.Label>BP _Systolic (mmHg)</Form.Label>
          <Form.Control
            type="number"
            name="BP _Systolic (mmHg)"
            value={formData["BP _Systolic (mmHg)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="bpDiastolic">
          <Form.Label>BP _Diastolic (mmHg)</Form.Label>
          <Form.Control
            type="number"
            name="BP _Diastolic (mmHg)"
            value={formData["BP _Diastolic (mmHg)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="follicleNoL">
          <Form.Label>Follicle No. (L)</Form.Label>
          <Form.Control
            type="number"
            name="Follicle No. (L)"
            value={formData["Follicle No. (L)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="follicleNoR">
          <Form.Label>Follicle No. (R)</Form.Label>
          <Form.Control
            type="number"
            name="Follicle No. (R)"
            value={formData["Follicle No. (R)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="avgFL">
          <Form.Label>Avg. F size (L) (mm)</Form.Label>
          <Form.Control
            type="number"
            name="Avg. F size (L) (mm)"
            value={formData["Avg. F size (L) (mm)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="avgFR">
          <Form.Label>Avg. F size (R) (mm)</Form.Label>
          <Form.Control
            type="number"
            name="Avg. F size (R) (mm)"
            value={formData["Avg. F size (R) (mm)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="endometrium">
          <Form.Label>Endometrium (mm)</Form.Label>
          <Form.Control
            type="number"
            name="Endometrium (mm)"
            value={formData["Endometrium (mm)"]}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Predict
        </Button>
      </Form>
      {result && (
        <p className="mt-3">
          The prediction result is: <strong>{Number(result)*100} %</strong>
        </p>
      )}
    </div>
  );
}

export default PCOSform;
