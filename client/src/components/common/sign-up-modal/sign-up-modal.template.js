export default /*html*/`

<div class="modal fade" id="sign-up-modal" tabindex="-1" aria-labelledby="sign-up-modal-label" aria-hidden="true"
    data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="sign-up-modal-label">Create Account</h5>
                <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">

                <div class="form-floating mb-3">
                    <input v-model="userData.firstName" type="text" class="form-control" id="sign-up-first-name"
                        placeholder="john">
                    <label for="sign-up-first-name">First Name</label>
                </div>

                <div class="form-floating mb-3">
                    <input v-model="userData.middleName" type="text" class="form-control" id="sign-up-middle-name"
                        placeholder="K">
                    <label for="sign-up-middle-name">Middle Name</label>
                </div>

                <div class="form-floating mb-3">
                    <input v-model="userData.lastName" type="text" class="form-control" id="sign-up-last-name"
                        placeholder="doe">
                    <label for="sign-up-last-name">Last Name</label>
                </div>

                <div class="form-floating mb-3">
                    <input v-model="userData.email" type="email" class="form-control" id="sign-up-email"
                        placeholder="name@example.com">
                    <label for="sign-up-email">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="userData.phone" type="number" class="form-control" id="sign-up-phone"
                        placeholder="Password">
                    <label for="sign-up-phone">Phone</label>
                </div>
                <div class="form-floating">
                    <input v-model="userData.password" type="password" class="form-control" id="sign-up-password"
                        placeholder="Password">
                    <label for="sign-up-password">Password</label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button @click="createNewuser" type="button" class="btn btn-primary">Create</button>
                
            </div>
        </div>
    </div>
</div>

`