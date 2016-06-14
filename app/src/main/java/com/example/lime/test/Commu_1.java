package com.example.lime.test;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.view.ContextMenu;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.Spinner;

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
    private io.socket.client.Socket mSocket;
    {
        try {
            mSocket = IO.socket("http://192.168.0.15:8000");

        }catch (Exception e)
        {

        }
    }
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.commu_1_layout);

        mSocket.emit("notice");
        mSocket.on("notice",handler);
        mSocket.connect();

        adapter = new Commu_listAdapter();
        listview = (ListView) findViewById(R.id.commulist);
        listview.setAdapter(adapter);


        listview.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView parent, View v, int position, long id) {
                // TODO : item click
                if(position==1 || position==0 || position==2) {
                    Intent pageAppSelectIntent = new Intent(Commu_1.this, Commu_read.class);
                    v = Tab_community.communityHGroup.getLocalActivityManager().startActivity("Commu_read",
                            pageAppSelectIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();

                    Tab_community.communityHGroup.replaceView(v);
                }
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
                    try {
                        for (int i = 0; i < data.length(); i++) {

                            JSONObject jsonObjectRow = (JSONObject) data.get(i);
                            String user_title = jsonObjectRow.getString("title");
                            String time = jsonObjectRow.getString("createAt").substring(0,10);
                            //Toast.makeText(getApplicationContext(),time,Toast.LENGTH_SHORT).show();
                            adapter.addItem(time,  user_title) ;
                            adapter.notifyDataSetChanged();
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
