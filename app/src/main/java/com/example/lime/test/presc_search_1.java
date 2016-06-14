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

import java.util.ArrayList;

/**
 * Created by lime on 2016-05-25.
 */
public class presc_search_1 extends Activity implements AdapterView.OnItemClickListener {
    private ListView list;
    final Context context = this;
    private Button btnAlert;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.presc_search1_layout);


        ListView list = (ListView) findViewById(R.id.namelist);
        list.setOnItemClickListener(this);

        ArrayList<String> arrList = new ArrayList<String>();
        arrList.add("2016년 4월 13일 장호준");
        arrList.add("2016년 4월 20일 장호준");
        arrList.add("2016년 4월 27일 장호준");
        arrList.add("2016년 5월 3일 장호준");
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
                R.layout.list_item, arrList);

        list.setOverScrollMode(View.OVER_SCROLL_IF_CONTENT_SCROLLS);
        list.setAdapter(adapter);


    }
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        if(position==1) {
            Intent intent = new Intent(presc_search_1.this, presc_search_2.class);

            view = Tab_prescription.prescriptionHGroup.getLocalActivityManager().startActivity("presc_search_2",
                    intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)).getDecorView();

            Tab_prescription.prescriptionHGroup.replaceView(view);
        }
    }


}

