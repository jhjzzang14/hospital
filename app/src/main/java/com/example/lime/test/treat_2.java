package com.example.lime.test;

import android.app.Activity;
import android.app.DatePickerDialog;
import android.app.DialogFragment;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.Spinner;
import android.widget.TextView;

import java.util.Calendar;

/**
 * Created by lime on 2016-05-23.
 */
public class treat_2 extends Activity implements View.OnClickListener {

    TextView tv;
    DatePicker dp;
    Calendar c;
    Button btnUpdateDate;
    Button btnGetDate;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.treat_2_layout);

        Spinner dcheckSpinner = (Spinner)findViewById(R.id.dcheck);
        ArrayAdapter dcheckAdapter = ArrayAdapter.createFromResource(this,
                R.array.doctor_check, android.R.layout.simple_spinner_item);
        dcheckSpinner.setAdapter(dcheckAdapter);

        Spinner dnameSpinner = (Spinner)findViewById(R.id.dname);
        ArrayAdapter dnameAdapter = ArrayAdapter.createFromResource(this,
                R.array.doctor_name, android.R.layout.simple_spinner_item);
        dnameSpinner.setAdapter(dnameAdapter);

        c = Calendar.getInstance();
        int year = c.get(c.YEAR);
        int month = c.get(c.MONTH);
        int dayOfMonth = c.get(c.DAY_OF_MONTH);

        tv = (TextView) findViewById(R.id.tv);
        btnGetDate = (Button) findViewById(R.id.dayup);
        dp = (DatePicker) findViewById(R.id.yeardp);
        btnGetDate.setOnClickListener(this);

    }

    public void onClick(View v) {
        if(v == btnGetDate) {
            tv.setText("");
            tv.setText("선택하신 날짜: " + tv.getText() + " " + dp.getYear() + "년 " +
                    (dp.getMonth() + 1) + "월 " + dp.getDayOfMonth() + "일");
        }
    }

    public void ontimeClicked(View v) {
        treat_2_TimePicker TimeFragment = new treat_2_TimePicker();
        //show : fragmentManager에 추가된 대화상자 출력
        TimeFragment.show(getParent().getFragmentManager(), "TimePicker");



    }

    @Override
    public void onBackPressed() {
        Tab_treatcheck parent = ((Tab_treatcheck)getParent());
        parent.onBackPressed();
    }
}
