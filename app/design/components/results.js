const React = require('react');
let $ = require('jquery');

let Results = React.createClass({

  getInitialState() {
    return {
      groups: [],
      selectedGroup: '',
      resultsByGroup: [],
      allByStudent: []
    };
  },

  componentDidMount() {
    $.ajax({
      url: '/api/groups',
      dataType: 'json',
      success: function (groups) {
        this.setState({
          groups: groups
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  selectGroup(event) {

    let data = {};
    data.group = event.target.value;
    $.ajax({
      url: '/api/get-by-groups',
      data: data,
      dataType: 'json',
      success: function (data) {
        console.log(data);

        this.setState({
          resultsByGroup: data
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  selectStudentAllTasks(event) {
    let data = {};
    data.group = this.state.selectedGroup;
    data.student_id = event.target.value;
    $.ajax({
      url: '/api/get-all-by-student',
      data: data,
      dataType: 'json',
      success: function (data) {
        console.log(data, 'all the students');

        this.setState({
          allByStudent: data
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render() {
    return (
      <div className="row">
        <div className="col-md-offset-1 col-md-10">
          <div className="row">
            <span className="btn btn-default" onClick={this.getDataByGroup}>По группе</span>
          </div>
          <div className="row">

            <select onChange={this.selectGroup}>
              <option selected="selected">Группа</option>
          {this.state.groups.map((group, i) => {
            return (<option key={i} value={group.study_group}>{group.study_group}</option>);
          })}
            </select>

            <select onChange={this.selectStudentAllTasks}>
              <option selected="selected">Студент</option>
          {this.state.resultsByGroup.map((group, i) => {
            return (<option key={i} value={group.student_id}>{group.first_name} {group.last_name}</option>);
          })}
            </select>
          </div>
          <h2>Результаты по группе</h2>
          {this.state.resultsByGroup.map((groupData, i) => {
            let tableHead = '';
            if (i == 0) {
              tableHead =
                <div className="row">
                  <div className="col-md-2">
                    <h3>Имя</h3>
                  </div>
                  <div className="col-md-2">
                    <h3>Фамилия</h3>
                  </div>
                  <div className="col-md-2">
                    <h3>Номер теста</h3>
                  </div>
                  <div className="col-md-1">
                    <h3>
                      <strong>Результат</strong>
                    </h3>
                  </div>
                </div>
            }

            return (
              <div className="table" key={i}>
                {tableHead}
                <div className="row">
                  <div className="col-md-2">
                    <span>{groupData.first_name}</span>
                  </div>
                  <div className="col-md-2">
                    <span>{groupData.last_name}</span>
                  </div>
                  <div className="col-md-2">
                    <span>{groupData.test_id}</span>
                  </div>
                  <div className="col-md-1">
                    <span>
                      <strong>{groupData.total}</strong>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <h2>Итоговый результат по студенту</h2>

            {this.state.allByStudent.map((groupData, i) => {
              let tableHead = '';
              if (i == 0) {
                tableHead =
                  <div className="row">
                    <div className="col-md-2">
                      <h3>Имя</h3>
                    </div>
                    <div className="col-md-2">
                      <h3>Фамилия</h3>
                    </div>
                    <div className="col-md-2">
                      <h3>Номер теста</h3>
                    </div>
                    <div className="col-md-1">
                      <h3>
                        <strong>Результат</strong>
                      </h3>
                    </div>
                  </div>
              }

              return (
                <div className="table" key={i}>
                {tableHead}
                  <div className="row">
                    <div className="col-md-2">
                      <span>{groupData.first_name}</span>
                    </div>
                    <div className="col-md-2">
                      <span>{groupData.last_name}</span>
                    </div>
                    <div className="col-md-2">
                      <span>{groupData.test_id}</span>
                    </div>
                    <div className="col-md-1">
                      <span>
                        <strong>{groupData.total}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

          <h2>Результат по каждому заданию по студенту</h2>

          {this.state.allByStudent.map((groupData, i) => {
            let tableHead = '';
            if (i == 0) {
              tableHead =
                <div className="row">
                  <div className="col-md-2">
                    <h3>Имя</h3>
                  </div>
                  <div className="col-md-2">
                    <h3>Фамилия</h3>
                  </div>
                  <div className="col-md-2">
                    <h3>Номер теста</h3>
                  </div>
                  <div className="col-md-1">
                    <h3>
                      <strong>Результат</strong>
                    </h3>
                  </div>
                </div>
            }

            return (
              <div className="table" key={i}>
                {tableHead}
                <div className="row">
                  <div className="col-md-2">
                    <span>{groupData.first_name}</span>
                  </div>
                  <div className="col-md-2">
                    <span>{groupData.last_name}</span>
                  </div>
                  <div className="col-md-2">
                    <span>{groupData.test_id}</span>
                  </div>
                  <div className="col-md-1">
                    <span>
                      <strong>{groupData.results.map((mark,i) => {
                        return(
                          <span key={i}>{mark}|</span>
                        );
                        })}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    );
  }
});

module.exports = Results;
