export default function DeleteButton(props) {
  async function deleted() {
    const data = props.appointment;
    const url = `http://localhost:8080/api/appointments/${data.id}/`;

    const request = {
      method: "Delete",
    };
    await fetch(url, request);
  }
  return (
    <button
      className="btn btn-danger rounded mx-auto d-block"
      onClick={deleted}
    >
      Cancel
    </button>
  );
}
