package com.example.lime.test;

import android.app.AlertDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.app.TimePickerDialog;
import android.graphics.Color;
import android.os.Bundle;
import android.text.format.DateFormat;
import android.view.Gravity;
import android.widget.TextView;
import android.widget.TimePicker;
import android.widget.Toast;

import java.util.Calendar;

/**
 * Created by lime on 2016-06-09.
 */
public class treat_2_TimePicker extends DialogFragment implements TimePickerDialog.OnTimeSetListener {

    @Override
    public Dialog onCreateDialog(Bundle savedInstancedState) {
        // 현재 시간을 타임피커의 초기값으로 사용
        final Calendar c = Calendar.getInstance();
        int hour = c.get(Calendar.HOUR_OF_DAY);
        int minute = c.get(Calendar.MINUTE);
        int min = 00;


        TimePickerDialog tpd = new TimePickerDialog(getActivity(), AlertDialog.THEME_HOLO_LIGHT, this,
                hour, min, DateFormat.is24HourFormat(getActivity()));

        // 타임 피커의 타이틀 설정
        TextView tvTitle = new TextView(getActivity());
        tvTitle.setText("시간을 선택하세요");
        tvTitle.setBackgroundColor(Color.parseColor("#24A68D"));
        tvTitle.setPadding(5, 3, 5, 3);
        tvTitle.setGravity(Gravity.CENTER_HORIZONTAL);
        tpd.setCustomTitle(tvTitle);
        return tpd;
    }

    @Override
    public void onTimeSet(TimePicker View, int hourOfday, int minute) {
        TextView tv1 = (TextView) getActivity().findViewById(R.id.tv1);
        String aMpM = "오전";
        if(hourOfday>11) {
            aMpM = "오후";
        }
        int currentHour;
        if(hourOfday>11) {
            currentHour = hourOfday-12;
        }
        else {
            currentHour = hourOfday;
        }
        //이벤트 발생 시 여기서 String.valueOf(hourOfday) + "시" + String.valueOf(minute) 로 값 읽어들여 DB에 넣어보기
        //tv1.setText("설정 시간은 " + String.valueOf(hourOfday) + "시" + String.valueOf(minute) + "분");



    }
}
