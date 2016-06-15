package com.example.lime.test;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.firebase.auth.UserInfo;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import io.socket.client.IO;
import io.socket.emitter.Emitter;

/**
 * Created by lime on 2016-05-23.
 */
public class Commu_write extends Activity {
    EditText title;
    EditText pwd;
    EditText text;
    Button insert;
    userInfo info;
    String name,phone,birthday,address;
    int no;
    private io.socket.client.Socket mSocket;
    {
        try {
            mSocket = IO.socket("http://192.168.0.15:8000");

        }catch (Exception e)
        {
        }
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.commu_write_layout);
        info = new userInfo();
        mSocket.on("insertNotice",handler);
        mSocket.connect();

        //전달 받은 회원 정보
        Intent getIntent = getIntent();
        name = getIntent.getStringExtra("name");
        no = getIntent.getIntExtra("no",1);
        birthday = getIntent.getStringExtra("birthday");
        address = getIntent.getStringExtra("address");
        phone = getIntent.getStringExtra("phone");

        //글 쓰기 선언
        title = (EditText) findViewById(R.id.titlewrite);
        pwd = (EditText) findViewById(R.id.passwordwrite);
        text = (EditText) findViewById(R.id.givetext);
        insert = (Button) findViewById(R.id.inserts);
        insert.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String get_title = title.getText().toString();
                String get_pwd = pwd.getText().toString();
                String get_text = text.getText().toString();
                JSONObject obj = new JSONObject();

                try{
                    obj.put("title",get_title);
                    obj.put("pwd",get_pwd);
                    obj.put("text",get_text);
                    obj.put("name",name);
                }catch (JSONException e){e.getStackTrace();}

                mSocket.emit("insertNotice",obj);
            }
        });
    }
    @Override
    public void onBackPressed() {
        Tab_community parent = ((Tab_community)getParent());
        parent.onBackPressed();
    }

    private Emitter.Listener handler = new Emitter.Listener() {
        @Override
        public void call(final Object... args) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    JSONObject data = (JSONObject) args[0];
                    try {
                        Toast.makeText(getApplicationContext(), data.getString("message"), Toast.LENGTH_SHORT).show();

                        Tab_community parent = ((Tab_community)getParent());
                        parent.onBackPressed();
                    }catch (JSONException e)
                    {
                        e.getStackTrace();
                    }
                }
            });
        }
    };
}
