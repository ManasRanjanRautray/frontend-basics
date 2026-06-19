const assetForm = document.getElementById("assetForm");
const assetTable = document.getElementById("assetTable");

assetForm.addEventListener("submit", function(e){

    e.preventDefault();

    const assetName =
        document.getElementById("assetName").value;

    const serialNo =
        document.getElementById("serialNo").value;

    const status =
        document.getElementById("status").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${assetName}</td>
        <td>${serialNo}</td>
        <td>${status}</td>
        <td>
            <button class="delete-btn">
                Delete
            </button>
        </td>
    `;

    assetTable.appendChild(row);

    row.querySelector(".delete-btn")
        .addEventListener("click", () => {
            row.remove();
        });

    assetForm.reset();
});