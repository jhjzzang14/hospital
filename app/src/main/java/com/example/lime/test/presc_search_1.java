package com.example.lime.test;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;

import io.socket.client.IO;
import io.socket.emitter.Emitter;

/**
 * Created by lime on 2016-05-25.
 */
public class presc_search_1 extends Activity implements AdapterView.OnItemClickListener {
   // private ListView list;
    final Context context = this;
    private Button btnAlert;
    ListView list;
    //ArrayAdapter<String> adapter;
    presc_listAdapter listAdpter;
    //ArrayList<String> mDatas= new ArrayList<String>();
    String name;
    int no;
    String time;
    String birthday;
    String address;
    String phone;
    int  prescription_no;
    //ArrayList<String> arrList;
    private io.socket.client.Socket mSocket;
    {
        try {
            mSocket = IO.socket("http://192.168.43.171:8000");

        }catch (Exception e)
        {

        }
    }
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.presc_1_layout);

        Intent getIntent = getIntent();
         name = getIntent.getStringExtra("name");
         no = getIntent.getIntExtra("no",1);
         birthday = getIntent.getStringExtra("birthday");
         address = getIntent.getStringExtra("address");
         phone = getIntent.getStringExtra("phone");

        listAdpter  = new presc_listAdapter();
        list = (ListView) findViewById(R.id.namelist1);

        list.setOnItemClickListener(this);

        //arrList = new ArrayList<String>();
       // adapter = new ArrayAdapter<String>(this,
         //       R.layout.list_item,mDatas);

        list.setOverScrollMode(View.OVER_SCROLL_IF_CONTENT_SCROLLS);
        list.setAdapter(listAdpter);

        mSocket.on("getPrescription",handler);
        mSocket.connect();
    }
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        //Toast.makeText(getApplicationContext(),mDatas.get(position), Toast.LENGTH_SHORT).show();

                Toast.makeText(getApplicationContext(),"test",Toast.LENGTH_SHORT).show();
                Intent intent = new Intent(presc_search_1.this, presc_search_2.class);

                //parent.getItemAtPosition(position);
                intent.putExtra("time", time);
                view = Tab_prescription.prescriptionHGroup.getLocalActivityManager().startActivity("presc_search_2",
                        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();

                Tab_prescription.prescriptionHGroup.replaceView(view);

    }

    public void clickdnamesearch(View v){
        JSONObject json = new JSONObject();

        //adapter.clear();
        try{
            json.put("name",name);
          //  adapter.add("2016년 4월 13일 장호준");
           // adapter.add("2016년 4월 20일 장호준");
          //  adapter.add("2016년 4월 27일 장호준");
         //   adapter.add("2016년 5월 3일 장호준");
        }catch (Exception e){}

        mSocket.emit("getPrescription",json);
    }

    private Emitter.Listener handler = new Emitter.Listener() {
        @Override
        public void call(final Object... args) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    JSONArray json = (JSONArray) args[0];
                    try
                    {
                       for(int i=0 ; i<json.length();i++ )
                       {
                           JSONObject obj = (JSONObject) json.get(i);
                           String name = obj.getString("name");
                           time = obj.getString("createAt").substring(0,10);
                           prescription_no=obj.getInt("prescription_no");
                           listAdpter.addItem(name,time,prescription_no);
                           listAdpter.notifyDataSetChanged();
                       }

                    }catch (Exception e){}
                }
            });
        }
    };

}

