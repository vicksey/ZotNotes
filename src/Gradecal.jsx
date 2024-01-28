import React, { useState } from "react";

export function gradecal() {
    return (

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script> 
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> 

<div class="container" style="margin-bottom:15px;"> 
  
  <div class="modal fade" id="gradeModal" tabindex="-1" role="dialog" aria-labelledby="gradeModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="gradeModalLongTitle">Grading Scale</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
        </div>
        <div class="modal-body">
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <th>Grade</th>
                  <th>Grade Points per Credit Hour</th>
                  <th>Explanation</th>
                </tr>
                <tr>
                  <td>A</td>
                  <td>4</td>
                  <td>Excellent</td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>3</td>
                  <td>Very Good</td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>2</td>
                  <td>Satisfactory</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>1</td>
                  <td>Poor</td>
                </tr>
                <tr>
                  <td>F</td>
                  <td>0</td>
                  <td>Failing</td>
                </tr>
                <tr>
                  <td>W</td>
                  <td>0</td>
                  <td>Withdrawal (prior to 60%)</td>
                </tr>
                <tr>
                  <td>WF</td>
                  <td>0</td>
                  <td>Withdrawal-Failing(after 60%)</td>
                </tr>
                <tr>
                  <td>WP</td>
                  <td>0</td>
                  <td>Withdrawal-Passing(after 60%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div class="card cardForm">
    <div class="card-body courseLineLocal">
      <button type="button" class="btn btn-link mb-3" data-toggle="modal" data-target="#gradeModal" > Grading Scale </button>
      <!-- Button trigger modal --> 
      
      <!--  	  <div id="accordion" class="m-3">
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-controls="collapseTwo">
          How to use the GPA Calculator
        </button>
      </h5>
    </div>

    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
     		  
	  
	  <div class="card jumbotron jumbotron-fluid p-4">
		  <h3>How to use the GPA Calculator</h3>
		  <div class="card-body">
			  <ol>
      <li>
        <h3>Enter your course name</h3>
        <p>In the first column, enter the name of the course. This way you can keep track of which grade is assigned to which class.</p>
      </li>
				    <li>
        <h3>Enter your course credits</h3>
        <p>Next, Enter the course's credit hours in the second column to calculate your score (most college classes are worth 3 or 4 credits).</p>
      </li>
      <li>
        <h3>Choose your course grade</h3>
        <p>Next, enter the grade you received in that particular course by selecting a letter grade from the dropdown.</p>
      </li>
				    <li>
        <h3>Select if course is a repeated course</h3>
        <p>Then, select if course is a repeated course IE you've taken this course previously and are retaking it for a better grade.</p>
      </li>
    <li>
        <h3>Choose your previous letter grade</h3>
        <p>Finally, enter the grade you previously received in that particular course by selecting a letter grade from the dropdown.</p>
      </li>
    
      <li>
        <h3>Add another class (optional)</h3>
        <p>Select "add class" to optionally add another row to your semester. Then repeat steps 1–3 for the new addition.</p>
      </li>
      <li>
        <h3>Add another semester (optional)</h3>
        <p>Hit the "add semester" button to keep the party going. Record all your semesters and be rewarded with your cumulative GPA!</p>
      </li>
    </ol>
		  
		  </div>
				 </div>

      </div>
    </div>
  </div>


</div>-->
      
      <form method="post" name="myform" id="myform" style="clear:both;">
        <div class="form-group form-row courseLine" id="gpaCalcTop">
          <div class="col-xl-2 col-sm-4 col-md-4 p-0" >
            <label for="courseName">Course</label>
            <input class="form-control" name="courseName" type="text" id="courseName" placeholder="Course Name" style="border-radius:  5px 0px 0px 5px!important; border-right:none;">
          </div>
          <div class="col-xl-2 col-sm-4 col-md-4 p-0">
            <label for="creditsfield1">Credits</label>
            <input class="form-control" name="creditsfield1" type="text" id="creditsfield" value="0" size="5" maxlength="3" style="border-radius: 0px !important; border-right:none;">
          </div>
          <div class="col-xl-2 col-sm-4 col-md-4 p-0">
            <label for="creditsfield1">Grade</label>
            <select class="form-control" type="select" name="gradeselect1" id="gradeselect" style="border-radius: 0px 5px 5px 0px !important;">
              <option value="4.00" selected="selected">A</option>
              <option value="3.00">B</option>
              <option value="2.00">C</option>
              <option value="1.00">D</option>
              <option value="0.00">F</option>
            </select>
          </div>
          <div class="col-xl-3 col-sm-6 pl-4">
            <label>Course Repeat?</label>
            <label class="custom-control custom-checkbox">
              <input type="checkbox" name="checkbox1" class="custom-control-input" tabindex="5" id="repeats" value="0" onclick="checkSelect()" data-rule-required="true" data-msg-required="Course 
Repeat?">
              <span class="custom-control-label" for="chbxTerms"></span></label>
          </div>
          <div class="col-xl-2 col-sm-6 p-0">
            <label for="creditsfield1">Previous Grade</label>
            <select class="form-control" name="prevgradeselect1" id="prevgradeselect" disabled="disabled">
              <option value="4.00" selected="selected">A</option>
              <option value="3.00">B</option>
              <option value="2.00">C</option>
              <option value="1.00">D</option>
              <option value="0.00">F</option>
              <option value="0.00">W</option>
              <option value="0.00">WF</option>
              <option value="0.00">WP</option>
            </select>
          </div>
          <div class="col-xl-1">
            <button type="button" class="close p-3 mt-3" aria-label="Close"> <span class="remove" aria-hidden="true">&times;</span> </button>
          </div>
        </div>
        <div class="beforeAdd">
          <input class="btn btn-primary btn-sm mb-4" name="add" type="button" id="add" value="Add Class" >
        </div>
        <div id="newSection" class="newSection"></div>
        <hr>
        <input class="btn btn-primary btn-sm mb-4 addSemester" name="addSemester" type="button" id="addSemester" value="Add Semester">
        <div class=" form-group form-row">
          <div class="col">
            <label>Current GPA*</label>
            <input class="form-control" name="currentgpafield" type="text" id="currentgpafield" value="0" size="5" maxlength="5">
          </div>
          <div class="col">
            <label>Total GPA Hours*</label>
            <input class="form-control" name="currentcreditsfield" type="text" id="currentcreditsfield" value="0" size="5" maxlength="5">
          </div>
        </div>
        <em>* This information can be found through webadvisor or selfservice</em>
        <div class="form-actions">
          <input class="btn btn-primary btn-sm mt-3 mb-3" name="calcGPA" type="button" id="calcGPA" onclick="calculate()" value="Calculate">
          <input class="btn btn-primary btn-sm mt-3 mb-3" name="resetButton" type="reset" id="resetButton" value="Reset" onclick="resetSelects()">
        </div>
        <div class="form-group form-row">
          <div class="col">
            <label>Projected Semester GPA</label>
            <input class="form-control" name="semgpafield" type="text" id="semgpafield" size="5" maxlength="5" readonly="readonly" />
          </div>
          <div class="col">
            <label>GPA Hours for this Semester</label>
            <input class="form-control" name="semcreditsfield" type="text" id="semcreditsfield" size="5" maxlength="5" readonly="readonly" />
          </div>
          <div class="col">
            <label>Projected Cumulative GPA</label>
            <input class="form-control" name="gpafield" type="text" id="gpafield" size="5" maxlength="5" readonly="readonly" />
          </div>
          <div class="col">
            <label>Total GPA Hours</label>
            <input class="form-control" name="totalcreditsfield" type="text" id="totalcreditsfield" size="5" maxlength="3" readonly="readonly" />
          </div>
        </div>
      </form>
      <div id="accordion2">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne"> Desired GPA Calculator </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion2">
            <div class="card-body">
              <form method="post" name="myform2" id="myform2" />
                <p>To calculate a goal GPA:</p>
                <ol>
                  <li>If you are repeating any courses for this semester, then you must fill out the calculator above to find the Projected Cumulative GPA for those repeated courses. Check the <strong>Repeat</strong> box below and skip to step 5.</li>
                  <li>If you are not repeating any courses for this semester, enter your current GPA.</li>
                  <li>Enter your total GPA hours, without including the current semester.</li>
                  <li>Enter the amount of GPA hours taken this semester.</li>
                  <li>Enter the goal GPA that you would like to achieve.</li>
                  <li>Hit the <strong>Calculate</strong> button. The  Projected GPA required to meet your goal will be displayed.</li>
                </ol>
                <div class="table-responsive form-group">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th>Are you repeating any courses this semester? Check if yes.</th>
                        <td><input class="form-control" name="repeatcheckbox" type="checkbox" id="repeats" value="0" onclick="targetCheckbox()"></td>
                      </tr>
                      <tr>
                        <th>Current GPA</th>
                        <td><input class="form-control" name="targetcumgpafield" type="text" id="targetcumgpafield" value="0" size="5" maxlength="5"></td>
                      </tr>
                      <tr>
                        <th>Total GPA Hours</th>
                        <td><input class="form-control" name="targettotalcreditsfield" type="text" id="targettotalcreditsfield" value="0" size="5" maxlength="4"></td>
                      </tr>
                      <tr>
                        <th>Goal Cumulative GPA</th>
                        <td><input class="form-control" name="targetgoalgpafield" type="text" id="targetgoalgpafield" value="0" size="5" maxlength="5"></td>
                      </tr>
                      <tr>
                        <th>GPA Hours this Semester</th>
                        <td><input class="form-control" name="currentcreditssemesterfield" type="text" id="currentcreditssemfield" value="0" size="5" maxlength="5"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="form-actions">
                  <input class="btn btn-secondary btn-lg" name="targetcalcGPA" type="button" id="targetcalcGPA" value="Calculate" onclick="calculateTarget()">
                  <input class="btn btn-secondary btn-lg" name="targetresetButton" type="reset" id="targetresetButton" value="Reset">
                </div>
                <div class="form-group row">
                  <label for="targetgpafield" class="col-sm-6 col-form-label col-form-label-sm font-weight-bold">To meet your goal, your Projected GPA for this semester needs to be:</label>
                  <div class="col-sm-4">
                    <input class="form-control" name="targetgpafield" type="text" id="targetgpafield" size="8" maxlength="5" readonly="readonly" style="width:150px;">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}


