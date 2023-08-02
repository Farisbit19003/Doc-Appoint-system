import Patient from "../schemas/patient.schema.js";

// Controller for creating a new patient
export const createPatient = async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);
    return res.status(201).json(newPatient);
  } catch (error) {
    console.error("Error creating patient:", error);
    return res.status(500).json({ error: "Could not create the patient." });
  }
};

// Controller for retrieving all patients
export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    return res.status(200).json(patients);
  } catch (error) {
    
    return res.status(500).json({ error: "Could not retrieve patients." });
  }
};

// Controller for retrieving a single patient by ID
export const getPatientById = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found." });
    }
    return res.status(200).json(patient);
  } catch (error) {
    return res.status(500).json({ error: "Could not retrieve the patient." });
  }
};