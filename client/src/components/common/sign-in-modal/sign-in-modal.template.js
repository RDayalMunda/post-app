export default /*html*/`

<div class="modal fade" id="sign-in-modal" tabindex="-1" aria-labelledby="sign-in-modal-label" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="sign-in-modal-label">Sign In</h5>
                <button type="button" class="btn-close" @click="closeModal" id="sign-in-modal-close-btn"></button>
            </div>
            <div class="modal-body">


                <div class="form-floating mb-3">
                    <input v-model="userData.email" type="email" class="form-control" id="sign-in-email" placeholder="name@example.com">
                    <label for="sign-in-email">Email address</label>
                </div>

                <div class="form-floating">
                    <input v-model="userData.password" type="password" class="form-control" id="sign-in-password" placeholder="Password">
                    <label for="sign-in-password">Password</label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button @click="signIn" type="button" class="btn btn-primary">Sign In</button>
            </div>
        </div>
    </div>
</div>

`