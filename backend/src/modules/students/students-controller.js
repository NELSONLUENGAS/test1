const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    try {


        const { name, section, class: className, roll } = req.query;

        const students = await getAllStudents({ name, section, className, roll });

        res.json({ students });
    } catch (error) {
        throw error
    }
});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code

    try {


        const newStudent = await addNewStudent({ ...req.body })

        res.send(newStudent)
    } catch (error) {
        throw error
    }
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    try {


        const id = req.params
        const fieldsToUpdate = req.body

        const response = await updateStudent({ id, ...fieldsToUpdate })

        res.send(response)
    } catch (error) {
        throw error
    }
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    try {


        const id = req.params

        const studentDetail = await getStudentDetail(id)

        res.json(studentDetail)
    } catch (error) {
        throw error
    }
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    try {


        const userId = req.params
        const { reviewerId, status } = req.body

        const response = await setStudentStatus({ userId, reviewerId, status })
        res.send(response)
    } catch (error) {
        throw error
    }
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
