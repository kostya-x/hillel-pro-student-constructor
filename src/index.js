'use strict';

// eslint-disable-next-line no-unused-vars
function Student(name, surename, birthYear) {
  const date = new Date;
  const lessonsAmount = 30;
  const attendance = new Array(lessonsAmount);
  const marks = new Array(lessonsAmount);

  this.name = name;
  this.surename = surename;
  this.birthYear = birthYear;

  this.age = () => date.getFullYear() - birthYear;

  this.present = () => {
    const index = attendance.findIndex((item) => typeof item === 'undefined');

    return attendance[index] = true;
  };

  this.absent = () => {
    const index = attendance.findIndex((item) => typeof item === 'undefined');

    return attendance[index] = false;
  };

  this.mark = (mark) => {
    const minMark = 0;
    const maxMark = 10;

    if (mark >= minMark && mark <= maxMark) {
      const index = marks.findIndex((item) => typeof item === 'undefined');

      return marks[index] = mark;
    }
  };

  this.summary = () => {
    const goodMarks = 9;
    const goodAttendance = 0.9;

    const averageMark = () => {
      const filteredMakrs = marks.filter((item) => typeof item !== 'undefined');

      return filteredMakrs.reduce((acc, cur) => acc + cur) / filteredMakrs.length;
    };

    const averageAttendance = () => {
      const filteredAttendance = attendance.filter((item) => typeof item !== 'undefined');

      return filteredAttendance.reduce((acc, cur) => acc + +cur) / filteredAttendance.length;
    };

    if (averageMark() > goodMarks && averageAttendance() > goodAttendance) {
      return 'Ути какой молодчинка!';
    } else if (averageMark() > goodMarks || averageAttendance() > goodAttendance) {
      return 'Норм, но можно лучше';
    } else {
      return 'Редиска!';
    }
  };
}