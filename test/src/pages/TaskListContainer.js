import { connect } from "react-redux";
import TaskList from "./TaskList";

const mapStateToProps = (state) => ({
  tasks: state.tasks, // Предполагается, что в вашем Redux store есть ключ 'tasks' с данными о тасках
});

export default connect(mapStateToProps)(TaskList);
