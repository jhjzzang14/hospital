package com.example.lime.test;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.Toast;

import java.util.ArrayList;

/**
 * Created by lime on 2016-06-04.
 */
public class Join_1 extends Activity {
    private ArrayList<View> history;
    public static Join_1 Join_1HGroup;

    protected void onCreate(Bundle savedInstancedState) {
        super.onCreate(savedInstancedState);
        setContentView(R.layout.join_1);

        final Button agree = (Button) findViewById(R.id.agree);
        final CheckBox cb1 = (CheckBox) findViewById(R.id.cb1);
        final CheckBox cb2 = (CheckBox) findViewById(R.id.cb2);
        final CheckBox cb3 = (CheckBox) findViewById(R.id.cb3);
        final CheckBox cb4 = (CheckBox) findViewById(R.id.cb4);
        final CheckBox cb5 = (CheckBox) findViewById(R.id.cb5);

        agree.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                if (cb1.isChecked()==true || cb2.isChecked()==true ||
                        cb3.isChecked()==true || cb4.isChecked()==true) // 모든 체크박스 true
                {
                    Intent intent = new Intent(Join_1.this, Join_2.class);
                    startActivity(intent);
                }
                else {
                    Toast.makeText(Join_1.this, "약관에 동의해주세요", Toast.LENGTH_SHORT).show();
                }
            }
        });

        cb5.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                if (cb5.isChecked()==true)
                {
                    cb1.setChecked(true);
                    cb2.setChecked(true);
                    cb3.setChecked(true);
                    cb4.setChecked(true);
                }
                else if(cb5.isChecked()==false) {
                    cb1.setChecked(false);
                    cb2.setChecked(false);
                    cb3.setChecked(false);
                    cb4.setChecked(false);
                }
            }
        });

    }


    //새로운 Level의 Activity를 추가하는 경우,
    public void replaceView(View view) {
        history.add(view);
        setContentView(view);
    }

    // Back Key가 눌러졌을 경우에 대한 처리
    public void back() {
        if(history.size() > 0) {
            history.remove(history.size()-1);
            if(history.size() ==  0)
                finish();
            else
                setContentView(history.get(history.size()-1));
        }
        else
        {
            finish();
        }
    }

    // Back Key에 대한 Event Handler
    @Override
    public void onBackPressed() {
        Join_1HGroup.back();
        return ;
    }
}
