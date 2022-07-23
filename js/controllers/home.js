const printCards = mentorsCollection => {
    console.log(mentorsCollection)
    $(".mentors-wrapper").empty()
    for (mentor in mentorsCollection) {
        let { name, email, phone } = mentorsCollection[mentor]
        let mentorCard = `
            <div class="col-6">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="card-text">Nombre: ${name}</div>
                        <div class="card-text">Email: ${email}</div>
                        <div class="card-text">Phone: ${phone}</div>
                        <div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-danger delete-button" data-key-delete="${mentor}">Eliminar</button>
                            <button type="button" class="btn btn-primary edit-button" data-key-edit="${mentor}">Editar</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        $(".mentors-wrapper").append(mentorCard)
    }
    $(".edit-button").click(editMentor)
    $(".delete-button").click(deleteMentor)
}