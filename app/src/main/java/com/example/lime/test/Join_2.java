package com.example.lime.test;

import android.app.Activity;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import org.junit.Test;

import java.util.ArrayList;

/**
 * Created by lime on 2016-06-04.
 */
public class Join_2 extends Activity {

    private ArrayList<View> history;
    public static Join_2 Join_2HGroup;


    public void onCreate(Bundle savedInstancedState) {
        super.onCreate(savedInstancedState);
        setContentView(R.layout.join_2);

        final Button join = (Button) findViewById(R.id.joinButton);
        final EditText name = (EditText) findViewById(R.id.nameinput);
        final EditText id = (EditText) findViewById(R.id.idnameinput);
        final EditText ps = (EditText) findViewById(R.id.passwordinput);
        final EditText email = (EditText) findViewById(R.id.emailinput);
        final EditText phone = (EditText) findViewById(R.id.phoneinput);

        join.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                if (name.getText().toString().equals("") || id.getText().toString().equals("") || ps.getText().toString().equals("") ||
                        email.getText().toString().equals("") || phone.getText().toString().equals("")) // 모든 체크박스 true
                {
                    Toast.makeText(Join_2.this, "정보를 모두 입력해주세요", Toast.LENGTH_SHORT).show();
                }
                else {
                    Intent intent = new Intent(Join_2.this, MainActivity.class);
                    startActivity(intent);
                    Toast.makeText(getApplication(), "회원가입을 축하드립니다. \n로그인 후 사용해주세요", Toast.LENGTH_LONG).show();
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
        Join_2HGroup.back();
        return;
    }

    private class AlertDialog {
    }
}
