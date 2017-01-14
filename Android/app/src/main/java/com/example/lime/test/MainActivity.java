package com.example.lime.test;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Layout;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TabHost;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import io.socket.client.IO;
import io.socket.emitter.Emitter;

public class MainActivity extends AppCompatActivity {
    EditText id;
    EditText pwd;
    int no;
    String name;
    String birthday;
    String address;
    String phone;
    String user_id;
    userInfo info;
    private io.socket.client.Socket mSocket;
    {
        try {
            mSocket = IO.socket("http://192.168.43.171:8000");

        }catch (Exception e)
        {

        }
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        info= new userInfo();
        final Button login = (Button) findViewById(R.id.idloginButton);
        id = (EditText) findViewById(R.id.idinput);
        pwd = (EditText) findViewById(R.id.idpassinput);

        mSocket.on("result", handler);
        mSocket.connect();

        login.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                if (id.getText().toString().equals("")) // 모든 체크박스 true
                {
                    Toast.makeText(MainActivity.this, "아이디를 입력해주세요", Toast.LENGTH_SHORT).show();
                }
                else if(pwd.getText().toString().equals("")) {
                    Toast.makeText(MainActivity.this, "비밀번호를 입력해주세요", Toast.LENGTH_SHORT).show();
                }
                else {
                    user_id = id.getText().toString().trim();
                    String user_pwd = pwd.getText().toString().trim();
                    Log.d("id",user_id);
                    JSONObject obj = new JSONObject();

                    try{
                        obj.put("id",user_id);
                        obj.put("pwd",user_pwd);
                    }catch (Exception e){
                        e.getStackTrace();
                    }

                    mSocket.emit("data",obj.toString());
                }
            }
        });
    }

    public void idSearch(View target) {
        Intent intent = new Intent(getApplicationContext(), Idsearc.class);
        startActivity(intent);
    }

    public void passSearch(View target) {
        Intent intent = new Intent(getApplicationContext(), Passsearc.class);
        startActivity(intent);
    }

    public void theJoin(View target) {
        Intent intent = new Intent(getApplicationContext(), Join_1.class);
        startActivity(intent);
    }

    public Emitter.Listener handler= new Emitter.Listener() {
        @Override
        public void call(final Object... args) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    JSONArray data = (JSONArray) args[0];

                    try {

                        String a = Integer.toString(data.length());

                        for (int i = 0; i < data.length(); i++) {

                            JSONObject jsonObjectRow = (JSONObject) data.get(i);
                            name = jsonObjectRow.getString("name");
                            no = jsonObjectRow.getInt("no");
                            birthday = jsonObjectRow.getString("birthday");
                            address = jsonObjectRow.getString("address");
                            phone = jsonObjectRow.getString("phone");

                        }
                        if(data.length()==1)
                        {
                            Intent intent = new Intent(getApplicationContext(), Login.class);
                            intent.putExtra("name",name);
                            intent.putExtra("no",no);
                            intent.putExtra("birthday",birthday);
                            intent.putExtra("address",address);
                            intent.putExtra("phone",phone);
                            startActivity(intent);
                        }else if(data.length()==0)
                        {
                            Toast.makeText(getApplicationContext(),"로그인 실패",Toast.LENGTH_SHORT).show();
                        }

                    }catch (JSONException e)
                    {
                        e.getStackTrace();
                    }
                }

            });
        }
    };
}


