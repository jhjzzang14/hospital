package com.example.lime.test;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.DialogFragment;
import android.support.v4.content.ContextCompat;
import android.view.ContextMenu;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.Spinner;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import io.socket.client.IO;
import io.socket.emitter.Emitter;

/**
 * Created by lime on 2016-05-23.
 */
public class Commu_1 extends Activity {
    ListView listview ;
    Commu_listAdapter adapter;
    Commu_listView_item item;
    String name;
    int no;
    String birthday;
    String address;
    String phone;

    //
    String content;
    String user_title;
    private io.socket.client.Socket mSocket;
    {
        try {
            mSocket = IO.socket("http://192.168.43.171:8000");

        }catch (Exception e)
        {

        }
    }
    @Override
    public void onCreate(final Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.commu_1_layout);

        mSocket.emit("notice");
        mSocket.on("notice",handler);
        mSocket.connect();

        item= new Commu_listView_item();
        adapter = new Commu_listAdapter();
        listview = (ListView) findViewById(R.id.commulist);
        listview.setAdapter(adapter);

        Intent getIntent = getIntent();
        name = getIntent.getStringExtra("name");
        no = getIntent.getIntExtra("no",1);
        birthday = getIntent.getStringExtra("birthday");
        address = getIntent.getStringExtra("address");
        phone = getIntent.getStringExtra("phone");

        listview.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView parent, View v, int position, long id) {
                // TODO : item click

                    Intent pageAppSelectIntent = new Intent(Commu_1.this, Commu_read.class);
                     item = (Commu_listView_item) adapter.getItem(position);
                Toast.makeText(getApplicationContext(),item.getDesc(),Toast.LENGTH_SHORT).show();
                pageAppSelectIntent.putExtra("title",user_title);
                pageAppSelectIntent.putExtra("content",content);

                    v = Tab_community.communityHGroup.getLocalActivityManager().startActivity("Commu_read",
                            pageAppSelectIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();

                 Tab_community.communityHGroup.replaceView(v);

            }
        }) ;


        Spinner readselectSpinner = (Spinner)findViewById(R.id.readselect);
        ArrayAdapter dcheckAdapter = ArrayAdapter.createFromResource(this,
                R.array.select, android.R.layout.simple_spinner_item);
        readselectSpinner.setAdapter(dcheckAdapter);

        final Button btn_write = (Button)findViewById(R.id.commuwrite);

        btn_write.setOnClickListener(new View.OnClickListener()  {
            public void onClick(View view) {
                Intent intent = new Intent(Commu_1.this, Commu_write.class);

                intent.putExtra("name",name);
                intent.putExtra("no",no);
                intent.putExtra("birthday",birthday);
                intent.putExtra("address",address);
                intent.putExtra("phone",phone);
                view = Tab_community.communityHGroup.getLocalActivityManager().startActivity("Commu_write",
                        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();

                Tab_community.communityHGroup.replaceView(view);
            }
        });


    }

    private Emitter.Listener handler = new Emitter.Listener() {
        @Override
        public void call(final Object... args) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    JSONArray data = (JSONArray) args[0];
                    String a = Integer.toString(data.length());
                    adapter.notifyDataSetChanged();

                    try {
                        for (int i = 0; i < data.length(); i++) {

                            JSONObject jsonObjectRow = (JSONObject) data.get(i);
                            user_title = jsonObjectRow.getString("title");
                            String time = jsonObjectRow.getString("createAt").substring(0,10);
                            content = jsonObjectRow.getString("content");
                            //Toast.makeText(getApplicationContext(),time,Toast.LENGTH_SHORT).show();
                            adapter.addItem(time,  user_title);
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
