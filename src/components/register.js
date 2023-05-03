import React from 'react'

function Register() {
    return (
        <div>
            <form>
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputNumber">Phone Number</label>
                    <input type="text" class="form-control" id="inputNumber" placeholder="phone" />
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address </label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="address" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
