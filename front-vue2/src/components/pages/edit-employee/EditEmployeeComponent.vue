<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Update Employee</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateFormEmployee()">
          <div class="form-group">
            <label class="font-weight-bold">Employee Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              v-model="employeeForm.name"
            >
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Job Role</label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              v-model="employeeForm.job_role"
            >
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              v-model="employeeForm.salary"
            >
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Birth</label>
            <input
              type="date"
              id="birth"
              name="birth"
              class="form-control"
              v-model="employeeForm.birth"
            >
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Employee Registration</label>
            <input
              type="text"
              id="employee_registration"
              name="employee_registration"
              class="form-control"
              v-model="employeeForm.employee_registration"
            >
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-edit']"/> Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./EditEmployee.js"></script>

<style src="" scoped></style>
